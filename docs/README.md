[< Back](./../README.md)

# JDER Core

A standard response builder. 

Compatible with all TypeScript/JavaScript frameworks with standard Response API.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i @jderstd/core

# Yarn
yarn add @jderstd/core

# pnpm
pnpm add @jderstd/core

# Deno
deno add npm:@jderstd/core

# Bun
bun add @jderstd/core
```

## Create a Success JSON Response

To create a JSON response without data, just use `createJsonResponse` function:

```ts
import { createJsonResponse } from "@jderstd/core";

const route = (): Response => {
    return createJsonResponse();
}
```

And the response will be shown as below:

```json
{
    "success": true,
    "data": null,
    "errors": []
}
```

## Create a Success JSON Response with Data

The `createJsonResponse` function can also be used to insert data to the response:

```ts
import { createJsonResponse } from "@jderstd/core";

const route = (): Response => {
    return createJsonResponse({
        data: "Hello, World!",
    });
}
```

And the response will be shown as below:

```json
{
    "success": true,
    "data": "Hello, World!",
    "errors": []
}
```

## Create a Failure JSON response

To create a failure JSON response, add `errors` field to the options:

```ts
import { createJsonResponse } from "@jderstd/core";

const route = (): Response => {
    return createJsonResponse({
        errors: [
            {
                code: "server",
            },
        ],
    });
}
```

And the response will be shown as below:

```json
{
    "success": false,
    "data": null,
    "errors": [
        {
            "code": "server",
            "path": [],
            "message": null
        }
    ]
}
```

## Create a Non-JSON response

To create a non-JSON response, use `createResponse` function:

```ts
import { createResponse } from "@jderstd/core";

const route = (): Response => {
    return createResponse({
        status: 404,
        headers: {
            "Content-Type": "text/plain",
        },
        body: "Not Found",
    });
}
```
