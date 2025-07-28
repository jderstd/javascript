import type { JsonResponse, JsonResponseError } from "#/@types/response";

import { mergeHeaders } from "#/response/headers/merge";

type CreateJsonResponseStructOptions<D = unknown> = {
    /**
     * Status code of the response.
     * By default, it is `200` for success and `400` for failure.
     */
    status?: number;
    /**
     * Additional headers of the response.
     */
    headers?: HeadersInit;
} & (
    | {
          /**
           * Whether the response is successful.
           * By default, it is `true`.
           */
          success?: true;
          /**
           * Data for the response when `success` is `true`.
           */
          data?: D;
      }
    | {
          /**
           * Whether the response is successful.
           * By default, it is `true`.
           */
          success: false;
          /**
           * Error for the response when `success` is `false`.
           */
          error: JsonResponseError;
      }
);

/** JSON Response structure. */
type JsonResponseStruct<D = unknown> = {
    /** Status code of the response. */
    status: number;
    /** Headers of the response. */
    headers: [
        string,
        string,
    ][];
    /** JSON response. */
    json: JsonResponse<D>;
};

const createJsonResponseStruct = <D = unknown>(
    options?: CreateJsonResponseStructOptions<D>,
): JsonResponseStruct<D> => {
    let status: number = options?.success === false ? 400 : 200;

    if (options?.status) status = options.status;

    const headers: [
        string,
        string,
    ][] = mergeHeaders(options?.headers, [
        [
            "Content-Type",
            "application/json",
        ],
    ]);

    let json: JsonResponse<D>;

    if (options?.success === false) {
        json = {
            success: false,
            error: options.error,
        };
    } else {
        json = {
            success: true,
            data: options?.data,
        };
    }

    return {
        status,
        headers,
        json,
    };
};

export type { CreateJsonResponseStructOptions, JsonResponseStruct };
export { createJsonResponseStruct };
