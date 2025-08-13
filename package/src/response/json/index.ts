import type { CreateJsonResponseStructOptions } from "#/response/json/struct";

import { createJsonResponseStruct } from "#/response/json/struct";

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
 * Example for creating a failure JSON response:
 *
 * ```ts
 * import { createJsonResponse } from "@jderjs/core";
 *
 * const route = (): Response => {
 *     return createJsonResponse({
 *         status: 500,
 *         errors: [
 *             {
 *                 code: "server",
 *                 message: "Internal server error",
 *             },
 *         ],
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

export type { CreateJsonResponseOptions };
export { createJsonResponse };
