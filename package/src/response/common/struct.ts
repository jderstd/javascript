import type { HeaderTuple } from "#/@types/response";

import { mergeHeaders } from "#/functions/merge-headers";

/** Options of `createResponseStruct` function. */
type CreateResponseStructOptions<B extends BodyInit = BodyInit> = {
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
    body?: B;
};

/** Response structure. */
type ResponseStruct<B = unknown> = {
    /** Status code of the response. */
    status: number;
    /** Headers of the response. */
    headers: HeaderTuple[];
    /** Body of the response. */
    body?: B;
};

/** Create a response structure. */
const createResponseStruct = <B extends BodyInit = BodyInit>(
    options?: CreateResponseStructOptions<B>,
): ResponseStruct<B> => {
    return {
        status: options?.status ?? 200,
        headers: mergeHeaders(options?.headers),
        body: options?.body,
    };
};

export type { CreateResponseStructOptions, ResponseStruct };
export { createResponseStruct };
