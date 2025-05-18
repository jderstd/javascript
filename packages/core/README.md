# JDER Core

A standard response builder.

This package includes different response builders based on the JSON response structure specified in [JSON Data Error Response (JDER)](https://github.com/alpheustangs/jder). With the builders, various kinds of responses can be created easily instead of sending plain text responses.

## Quick Start

To create a JSON response, use the following code:

```ts
import { createJsonResponse } from "@jderjs/core";

const route = (): Response => {
    return createJsonResponse();
}
```

## License

This project is licensed under the terms of the MIT license.
