[@jderstd/core](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(options?): Response;
```

Defined in: [response/json/index.ts:54](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/response/json/index.ts#L54)

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
