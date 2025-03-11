/* eslint-disable no-restricted-syntax */

import isEqual from "react-fast-compare";

import { CheckResponseHandlerOptions, IcdResponse } from "./types/actions";
import { CDEntity, CDEntityType } from "./types/entity";
import { OID } from "./types/generic";


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
