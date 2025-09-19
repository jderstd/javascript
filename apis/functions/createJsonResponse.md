[@jderstd/core](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(options?): Response;
```

Defined in: [response/json/index.ts:54](https://github.com/jderstd/core.js/blob/7c2ca31959b987ff3d948220b721ea46e9c159a4/package/src/response/json/index.ts#L54)

Create a JSON response.

### Examples

Example for creating a successful JSON response without data:

```ts
import { createJsonResponse } from "@jderstd/core";

const route = (): Response => {
    return createJsonResponse();
};
```

Example for creating a successful JSON response with data:

```ts
import { createJsonResponse } from "@jderstd/core";

const route = (): Response => {
    return createJsonResponse({
        data: "Hello, World!",
    });
}
```

Example for creating a failure JSON response:

```ts
import { createJsonResponse } from "@jderstd/core";

const route = (): Response => {
    return createJsonResponse({
        status: 500,
        errors: [
            {
                code: "server",
                message: "Internal server error",
            },
        ],
    });
};
```

## Type Parameters

### D

`D` = `unknown`

## Parameters

### options?

[`CreateJsonResponseOptions`](../type-aliases/CreateJsonResponseOptions.md)\<`D`\>

## Returns

`Response`
