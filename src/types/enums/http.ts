export enum HTTP_STATUS_CODE {

  //  BAD REQUEST
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  GONE = 410,

  //  SUCCESS
  SUCCESS = 200,
  CREATED = 201,

  NOT_MODIFIED = 304,

  //  INTERNAL ERROR
  INTERNAL_SERVER_ERROR = 500,
}

export enum API_CODE {
  SUCCESS = 0,
  VALIDATION_ERROR = 1,
  NOT_FOUND_ERROR = 2,
  ENTITIES_NOT_RELATED = 3,
  DUPLICATED_RESOURCES = 4,
  FORBIDDEN = 5,
  UNAUTHORIZED = 6,
  TOKEN_EXPIRED = 7,
  FAILED_TO_CREATE_RESOURCE = 8,
  RESOURCE_DELETED = 9,
  UNKNOWN_ERROR = 500,
}

export const API_MESSAGES: Record<API_CODE, string> = {
  [API_CODE.SUCCESS]: "Ok",
  [API_CODE.VALIDATION_ERROR]: "Validation error",
  [API_CODE.NOT_FOUND_ERROR]: "Not found error",
  [API_CODE.UNKNOWN_ERROR]: "Unknown error",
  [API_CODE.TOKEN_EXPIRED]: "Your token is expired",
  [API_CODE.ENTITIES_NOT_RELATED]: "Your request entities are not related",
  [API_CODE.DUPLICATED_RESOURCES]: "Your request include field duplicated with existed data",
  [API_CODE.FORBIDDEN]: "You are not allowed to do this",
  [API_CODE.UNAUTHORIZED]: "We don't know who you are",
  [API_CODE.FAILED_TO_CREATE_RESOURCE]: "Failed to create new resource",
  [API_CODE.RESOURCE_DELETED]: "Resource is deleted",
};
