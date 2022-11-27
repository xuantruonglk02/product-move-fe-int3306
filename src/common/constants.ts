export enum PageName {
    LOGIN_PAGE = 'LoginPage',
    NOT_FOUND_PAGE = 'NotFoundPage',
    FORBIDDEN_PAGE = 'ForbiddenPage',
}

export enum DATE_TIME_FORMAT {
    YYYY_MM_DD_HYPHEN = 'YYYY-MM-DD',
    DD_MM_YYYY_DASH = 'DD/MM/YYYY',
    hh_mm_L_COLON = 'h:mm L',
    DD_MM_YY_DASH = 'DD/MM/YYYY',
    hh_mm = 'hh:mm',
    DD = 'DD',
    DAY_NAME_MONTH_STRING = 'dddd (DD-MM)',
    YYYY = 'YYYY',
    YYYY_MM_HYPHEN = 'YYYY-MM',
    HH_MM_SS_COLON = 'HH:mm:ss',
    HH_MM_COLON = 'HH:mm',
    YYYY_MM_DD_HYPHEN_HH_MM_SS_COLON = 'YYYY-MM-DD HH:mm:ss',
    YYYY_MM_DD_HYPHEN_HH_MM_COLON = 'YYYY-MM-DD HH:mm',
    DD_MM_YYYY_SLASH = 'DD/MM/YYYY',
    MM_DD_YYYY_SLASH_HH_MM_SS_COLON = 'MM/DD/YYYY HH:mm:ss',
    MM_DD_YYYY_SLASH_HH_MM_COLON = 'MM/DD/YYYY HH:mm',
    MM_DD_YYYY_SLASH = 'MM/DD/YYYY',
}

export declare enum HttpStatus {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLYHINTS = 103,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    MISDIRECTED = 421,
    UNPROCESSABLE_ENTITY = 422,
    FAILED_DEPENDENCY = 424,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
}

export enum OrderDirection {
    ASCENDING = 'ascending',
    DESCENDING = 'descending',
}

export enum OrderBy {
    CREATED_AT = 'createdAt',
    UPDATED_AT = 'updatedAt',
}

export enum SupportLanguage {
    VI = 'vi',
}

export const Regex = {
    EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export const DEFAULT_LANGUAGE = SupportLanguage.VI;
export const IMAGE_URL_MAX_LENGTH = 255;
export const PASSWORD_MIN_LENGTH = 8;
export const HASH_PASSWORD_LENGTH = 60;
export const INPUT_TEXT_MAX_LENGTH = 255;
export const ID_MIN_NUMBER = 1;
export const PHONE_NUMBER_MAX_LENGTH = 12;
