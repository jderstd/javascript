[@jderjs/core](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(options?): Response;
```

Defined in: [json/index.ts:151](https://github.com/jder-std/core.js/blob/8f752d1679b827b4deb2cd21184bd81491ea8d2c/package/src/response/json/index.ts#L151)

Create a JSON response.

### Examples

Example for creating a successful JSON response without data:

```ts
import { createJsonResponse } from "@jderjs/core";

const route = (): Response => {
    return createJsonResponse();
};
```

Example for creating a successful JSON response with data:

```ts
import { createJsonResponse } from "@jderjs/core";

const route = (): Response => {
    return createJsonResponse({
        data: "Hello, World!",
    });
}
```

Example for creating a failed JSON response:

```ts
import { createJsonResponse } from "@jderjs/core";

const route = (): Response => {
    return createJsonResponse({
        success: false,
        error: {
            code: "server",
            message: "Internal server error",
        },
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
