[@jderstd/core](../README.md) / createResponse

# Function: createResponse()

```ts
function createResponse<B>(options?): Response;
```

Defined in: [response/common/index.ts:40](https://github.com/jderstd/javascript/blob/02a527e4c93d44346d8d60c7eebfc9fd7e020c79/packages/core/src/response/common/index.ts#L40)

Create a response.

### Examples

Example for creating a basic response:

```ts
import { createResponse } from "@jderstd/core";

const route = (): Response => {
    return createResponse();
};
```

Example for creating a response with status, headers, and body:

```ts
import { createResponse } from "@jderstd/core";

const route = (): Response => {
    return createResponse({
        status: 404,
        headers: [
            ["Content-Type", "text/plain"],
        ],
        body: "Not Found",
    });
};
```

## Type Parameters

### B

`B` *extends* `BodyInit` = `BodyInit`

## Parameters

### options?

[`CreateResponseOptions`](../type-aliases/CreateResponseOptions.md)\<`B`\>

## Returns

`Response`
