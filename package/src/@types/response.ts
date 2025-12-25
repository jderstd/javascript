import type { Format, Partial } from "ts-vista";

/** Header tuple. */
type HeaderTuple = [
    string,
    string,
];

/** JSON response error. */
type JsonResponseError = {
    /** Code representing the error. */
    code: string;
    /** Indicates where the error occurred. */
    path: string[];
    /** Detail of the error. */
    message: string | null;
};

/** Input type for JSON response error. */
type JsonResponseErrorInput = Format<
    Partial<JsonResponseError, "path" | "message">
>;

/** JSON response. */
type JsonResponse<D = unknown> = {
    /** Indicates whether the response is successful or not. */
    success: boolean;
    /** Requested information for the response when `success` is `true`. */
    data: D | null;
    /** A list of errors for the response when `success` is `false`. */
    errors: JsonResponseError[];
};

export type {
    HeaderTuple,
    JsonResponseError,
    JsonResponseErrorInput,
    JsonResponse,
};
