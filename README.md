# JDER

A standard response builder.

## Quick Start

To create a JSON response, use the following code:

```ts
import { createJsonResponse } from "@jderjs/core";

const route = (): Response => {
    return createJsonResponse();
}
```

## Documentation

For usage detials of the core package,
please refer to the [Core Documentation](./docs/core/README.md).

For integration with Hono,
please refer to the [Hono Documentation](./docs/hono/README.md).

## API References

For core package APIs, 
please refer to the [Core API Reference](./apis/core/README.md).

For Hono package APIs, 
please refer to the [Hono API Reference](./apis/hono/README.md).

## License

This project is licensed under the terms of the MIT license.
