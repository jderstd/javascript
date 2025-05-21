# JDER Core

A response builder for JavaScript / TypeScript.

This package includes different response builders based on the JSON response structure specified in [JSON Data Error Response (JDER)](https://github.com/jder-std/spec). With the builders, various kinds of responses can be created easily instead of sending plain text responses.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i @jderjs/core

# Yarn
yarn add @jderjs/core

# pnpm
pnpm add @jderjs/core

# Deno
deno add npm:@jderjs/core

# Bun
bun add @jderjs/core
```

## Quick Start

To create a JSON response, use the following code:

```ts
import { createJsonResponse } from "@jderjs/core";

const route = (): Response => {
    return createJsonResponse();
}
```

And the response will be shown as below:

```json
{
    "success": true
}
```

## Documentation

For the documentation,
please refer to the [Documentation](./docs/README.md).

## APIs

For the package APIs, 
please refer to the [APIs](./apis/README.md).

## License

This project is licensed under the terms of the MIT license.
