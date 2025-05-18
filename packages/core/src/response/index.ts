import { mergeHeaders } from "#/response/headers/merge";

type CreateResponseStructOptions<D extends BodyInit = BodyInit> = {
    /**
     * Status code of the response.
     * By default, it is `200`.
     */
    status?: number;
    /**
     * Additional headers of the response.
     */
    headers?: HeadersInit;
    /**
     * Body of the response.
     */
    body?: D;
};

/** Response structure. */
type ResponseStruct<B = unknown> = {
    /** Status code of the response. */
    status: number;
    /** Headers of the response. */
    headers: [string, string][];
    /** Body of the response. */
    body?: B;
};

const createResponseStruct = <B extends BodyInit>(
    options?: CreateResponseStructOptions<B>,
): ResponseStruct<B> => {
    return {
        status: options?.status ?? 200,
        headers: mergeHeaders(options?.headers),
        body: options?.body,
    };
};

/** Options of `createResponse` function. */
type CreateResponseOptions<D extends BodyInit> = CreateResponseStructOptions<D>;

/**
 * Create a response.
 *
 * ### Examples
 *
 * Example for creating a basic response:
 *
 * ```ts
 * import { createResponse } from "@jderjs/core";
 *
 * const route = (): Response => {
 *     return createResponse();
 * };
 * ```
 *
 * Example for creating a response with status, headers, and body:
 *
 * ```ts
 * import { createResponse } from "@jderjs/core";
 *
 * const route = (): Response => {
 *     return createResponse({
 *         status: 404,
 *         headers: [
 *             ["Content-Type", "text/plain"],
 *         ],
 *         body: "Not Found",
 *     });
 * };
 * ```
 */
const createResponse = <D extends BodyInit = BodyInit>(
    options?: CreateResponseOptions<D>,
): Response => {
    const { status, headers, body } = createResponseStruct(options);

    return new Response(body, {
        status,
        headers,
    });
};

export type {
    CreateResponseStructOptions,
    ResponseStruct,
    CreateResponseOptions,
};
export { createResponseStruct, createResponse };
