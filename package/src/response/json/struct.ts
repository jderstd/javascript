import type { Format } from "ts-vista";

import type {
    HeaderTuple,
    JsonResponse,
    JsonResponseError,
} from "#/@types/response";

import { mergeHeaders } from "#/functions/merge-headers";

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
     * A list of errors for the response when `success` is `false`.
     */
    errors?: never;
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
     * A list of errors for the response when `success` is `false`.
     */
    errors: JsonResponseError[];
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
    // errors specified
    if ("errors" in options && Array.isArray(options.errors)) return false;
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
              errors: (options as CreateJsonFailureResponseStructOptions)
                  .errors,
          };

    return {
        status,
        headers,
        json,
    };
};

export type { CreateJsonResponseStructOptions, JsonResponseStruct };
export { createJsonResponseStruct };
