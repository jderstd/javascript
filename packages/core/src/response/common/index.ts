import type { CreateResponseStructOptions } from "#/response/common/struct";

import { createResponseStruct } from "#/response/common/struct";

/** Options of `createResponse` function. */
type CreateResponseOptions<B extends BodyInit = BodyInit> =
    CreateResponseStructOptions<B>;

/**
 * Create a response.
 *
 * ### Examples
 *
 * Example for creating a basic response:
 *
 * ```ts
 * import { createResponse } from "@jderstd/core";
 *
 * const route = (): Response => {
 *     return createResponse();
 * };
 * ```
 *
 * Example for creating a response with status, headers, and body:
 *
 * ```ts
 * import { createResponse } from "@jderstd/core";
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
const createResponse = <B extends BodyInit = BodyInit>(
    options?: CreateResponseOptions<B>,
): Response => {
    const { status, headers, body } = createResponseStruct(options);

    return new Response(body, {
        status,
        headers,
    });
};

export type { CreateResponseOptions };
export { createResponse };
