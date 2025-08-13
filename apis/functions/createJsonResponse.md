[@jderjs/core](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(options?): Response;
```

Defined in: [response/json/index.ts:54](https://github.com/jder-std/core.js/blob/fa0b9604b54acf53ee32ab0dac79b01444945478/package/src/response/json/index.ts#L54)

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

Example for creating a failure JSON response:

```ts
import { createJsonResponse } from "@jderjs/core";

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
