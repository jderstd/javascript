/** Header tuple. */
type HeaderTuple = [
    string,
    string,
];

/** JSON response error. */
type JsonResponseError = {
    /** Error code. */
    code: string;
    /** Field of the error. */
    field?: string;
    /** Message of the error. */
    message?: string;
};

/** JSON response. */
type JsonResponse<D = unknown> = {
    /** Whether the response is successful. */
    success: boolean;
    /** Data for the response when `success` is `true`. */
    data?: D;
    /** Error for the response when `success` is `false`. */
    error?: JsonResponseError;
};

export type { HeaderTuple, JsonResponseError, JsonResponse };
