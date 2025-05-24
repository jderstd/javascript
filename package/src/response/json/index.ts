import { mergeHeaders } from "#/response/headers/merge";

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
    headers: [string, string][];
    /** JSON response. */
    json: JsonResponse<D>;
};

const createJsonResponseStruct = <D = unknown>(
    options?: CreateJsonResponseStructOptions<D>,
): JsonResponseStruct<D> => {
    let status: number = options?.success === false ? 400 : 200;

    if (options?.status) status = options.status;

    const headers: [string, string][] = mergeHeaders(options?.headers, [
        ["Content-Type", "application/json"],
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

/** Options of `createJsonResponse` function. */
type CreateJsonResponseOptions<D = unknown> =
    CreateJsonResponseStructOptions<D>;

/**
 * Create a JSON response.
 *
 * ### Examples
 *
 * Example for creating a successful JSON response without data:
 *
 * ```ts
 * import { createJsonResponse } from "@jderjs/core";
 *
 * const route = (): Response => {
 *     return createJsonResponse();
 * };
 * ```
 *
 * Example for creating a successful JSON response with data:
 *
 * ```ts
 * import { createJsonResponse } from "@jderjs/core";
 *
 * const route = (): Response => {
 *     return createJsonResponse({
 *         data: "Hello, World!",
 *     });
 * }
 * ```
 *
 * Example for creating a failed JSON response:
 *
 * ```ts
 * import { createJsonResponse } from "@jderjs/core";
 *
 * const route = (): Response => {
 *     return createJsonResponse({
 *         success: false,
 *         error: {
 *             code: "server",
 *             message: "Internal server error",
 *         },
 *     });
 * };
 * ```
 */
const createJsonResponse = <D = unknown>(
    options?: CreateJsonResponseOptions<D>,
): Response => {
    const { status, headers, json } = createJsonResponseStruct(options);

    return new Response(JSON.stringify(json), {
        status,
        headers,
    });
};

export type {
    JsonResponseError,
    JsonResponse,
    CreateJsonResponseStructOptions,
    JsonResponseStruct,
    CreateJsonResponseOptions,
};

export { createJsonResponseStruct, createJsonResponse };
