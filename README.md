# JDER Core

A response builder for JavaScript / TypeScript.

This package includes different response builders based on the JSON response structure specified in [JSON Data Errors Response (JDER)](https://github.com/jderstd/spec). With the builders, various kinds of responses can be created easily instead of sending plain text responses.

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

## Quick Start

To create a JSON response, use the following code:

```ts
import { createJsonResponse } from "@jderstd/core";

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
