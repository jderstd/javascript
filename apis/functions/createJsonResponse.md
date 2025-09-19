[@jderstd/core](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(options?): Response;
```

Defined in: [response/json/index.ts:54](https://github.com/jderstd/javascript/blob/02a527e4c93d44346d8d60c7eebfc9fd7e020c79/packages/core/src/response/json/index.ts#L54)

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
