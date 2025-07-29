import type { Format } from "ts-vista";

import type {
    HeaderTuple,
    JsonResponse,
    JsonResponseError,
} from "#/@types/response";

import { mergeHeaders } from "#/response/headers/merge";

type CreateJsonSuccessResponseStructOptions<D = unknown> = {
    /**
     * Whether the response is successful.
     * By default, it is `true`.
     */
    success?: true;
    /**
     * Status code of the response.
     * By default, it is `200` for success and `400` for failure.
     */
    status?: number;
    /**
     * Additional headers of the response.
     */
    headers?: HeadersInit;
    /**
     * Data for the response when `success` is `true`.
     */
    data?: D;
    /**
     * Error for the response when `success` is `false`.
     */
    error?: never;
};

type CreateJsonFailureResponseStructOptions = {
    /**
     * Whether the response is successful.
     * By default, it is `true`.
     */
    success?: false;
    /**
     * Status code of the response.
     * By default, it is `200` for success and `400` for failure.
     */
    status?: number;
    /**
     * Additional headers of the response.
     */
    headers?: HeadersInit;
    /**
     * Data for the response when `success` is `true`.
     */
    data?: never;
    /**
     * Error for the response when `success` is `false`.
     */
    error: JsonResponseError;
};

/** Options of `createJsonResponseStruct` function. */
type CreateJsonResponseStructOptions<D = unknown> = Format<
    | CreateJsonSuccessResponseStructOptions<D>
    | CreateJsonFailureResponseStructOptions
>;

/** JSON Response structure. */
type JsonResponseStruct<D = unknown> = {
    /** Status code of the response. */
    status: number;
    /** Headers of the response. */
    headers: HeaderTuple[];
    /** JSON response. */
    json: JsonResponse<D>;
};

const isResponseSuccess = <D>(
    options?: CreateJsonResponseStructOptions<D>,
): boolean => {
    // blank options
    if (!options) return true;
    // error specified
    if ("error" in options && typeof options.error === "object") return false;
    // default
    return true;
};

/** Create a JSON response structure. */
const createJsonResponseStruct = <D = unknown>(
    options?: CreateJsonResponseStructOptions<D>,
): JsonResponseStruct<D> => {
    const isSuccess: boolean = isResponseSuccess(options);

    const status: number = options?.status ?? (isSuccess ? 200 : 400);

    const headers: HeaderTuple[] = mergeHeaders(options?.headers, [
        [
            "Content-Type",
            "application/json",
        ],
    ]);

    const json: JsonResponse<D> = isSuccess
        ? {
              success: true,
              data: (
                  options as
                      | CreateJsonSuccessResponseStructOptions<D>
                      | undefined
              )?.data,
          }
        : {
              success: false,
              error: (options as CreateJsonFailureResponseStructOptions).error,
          };

    return {
        status,
        headers,
        json,
    };
};

export type { CreateJsonResponseStructOptions, JsonResponseStruct };
export { createJsonResponseStruct };
