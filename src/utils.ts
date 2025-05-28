/* eslint-disable no-restricted-syntax */

import isEqual from "react-fast-compare";

import { CheckResponseHandlerOptions, IcdResponse } from "./types/actions";
import { CDEntity, CDEntityType } from "./types/entity";
import { OID } from "./types/generic";


// Deliberately not support deep convert nullable to optional,
// since this is used for converting the first level of the nullable keys from CD
export type NullableToOptional<T> = T extends Array<infer U>
  ? NullableToOptional<U>[]
  : {
    [P in keyof T as null extends T[P] ? never : P]: T[P];
  } & {
    [P in keyof T as null extends T[P] ? P : never]?: Exclude<T[P], null>;
  };

export const nullToUndefined = <T>(obj: T): NullableToOptional<T> => {
  if (obj === null || typeof obj !== "object") {
    return obj as NullableToOptional<T>;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => nullToUndefined(item)) as unknown as NullableToOptional<T>;
  }

  const result = { ...obj } as Record<string, unknown>;
  // Only support the first level of the nullable keys from CD,
  // this is to keep deeper structure of the object
  // If you want to convert the deeper structure, you can use deepNullToUndefined
  for (const key in result) {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      if (result[key] === null) {
        result[key] = undefined;
      }
    }
  }
  return result as NullableToOptional<T>;
};


type DeepNullToUndefined<T> = T extends Primitive | Date
  ? T
  : T extends (infer U)[]
    ? DeepNullToUndefined<U>[]
    : T extends readonly (infer U)[]
      ? readonly DeepNullToUndefined<U>[]
      : {
        [P in keyof T]: null extends T[P]
          ? Exclude<T[P], null> extends object | undefined
            ? DeepNullToUndefined<Exclude<T[P], null>> | undefined
            : Exclude<T[P], null> | undefined
          : T[P] extends object | undefined
            ? DeepNullToUndefined<T[P]>
            : T[P];
      };

type Primitive = string | number | boolean | bigint | symbol | undefined | null;

export function deepNullToUndefined<T>(obj: T): DeepNullToUndefined<T> {
  if (obj === null || typeof obj !== "object") {
    return obj as DeepNullToUndefined<T>;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepNullToUndefined(item)) as DeepNullToUndefined<T>;
  }

  const result = { ...obj } as Record<string, unknown>;
  for (const key in result) {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      if (result[key] === null) {
        result[key] = undefined;
      } else if (typeof result[key] === "object") {
        result[key] = deepNullToUndefined(result[key]);
      }
    }
  }
  return result as DeepNullToUndefined<T>;
}

const checkIsOIDRegex = new RegExp(`^(${Object.values(CDEntityType).map((t) => t.replaceAll("-", "\\-")).join("|")})\\-`, "");

export const checkIcdResponseHandler = <R extends CDEntity>(
  res: IcdResponse<R>,
  options: CheckResponseHandlerOptions = {},
) => {
  if (res && res.code !== 0) {
    const { message: msg = res.code } = options;
    throw new Error(String(msg));
  }
};

export const getCDTypeFromOID = (oid: OID): CDEntityType => {
  if (!oid) {
    return "" as unknown as CDEntityType;
  }
  const strPos = oid.indexOf("-", 5);
  return oid.slice(0, strPos) as CDEntityType;
};

export const checkIsOID = (oid: unknown): boolean => {
  if (typeof oid !== "string") { return false; }
  checkIsOIDRegex.lastIndex = 0;
  return checkIsOIDRegex.test(oid);
};

export const getOID = (
  id: string | number,
  entityType: CDEntityType,
) => {
  if (!id) return "";

  if (typeof id === "string" && checkIsOID(id)) return id;

  return `${entityType}-${id}`;
};

export const getEntityIDNumberFromOID = (oid: string) => {
  if (!checkIsOID(oid)) {
    return null;
  }
  let count = 0;
  for (let i = 0, len = oid.length; i < len; i++) {
    if (oid[i] === "-") {
      count += 1;
      if (count === 2) {
        const numberString = oid.substring(i + 1);
        return parseInt(numberString);
      }
    }
  }
  return null;
};

// Because Object.assign also copy the "undefined" value from source to target so we have to use this function
export const mergeCDObject = <T extends CDEntity, U extends CDEntity>(
  target: T,
  source: U,
): [newEntity:T, updatedFields:string[]] => {
  const _updatedFields: string[] = [];
  for (const [key, value] of Object.entries(source)) {
    if (target[key as keyof CDEntity] === value || typeof value === "undefined") {
      continue;
    }

    if (!isEqual(target[key as keyof CDEntity], value)) {
      target[key as keyof CDEntity] = value;
      _updatedFields.push(key);
    }
  }
  return [target, _updatedFields];
};
