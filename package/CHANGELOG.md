## 0.5.0 (2025-12-25)

### Breaking Changes

- `errors` field of JSON response create options use `JsonResponseErrorInput` type now
- `path` field in `JsonResponseError` is a array instead of an optional array now
- `errors` field in `JsonResponse` is a array instead of an optional array now

### What's New

- Export `JsonResponseErrorInput`

### What's Changed

- Avoid omit null value and empty array

## 0.4.0 (2025-09-20)

### Breaking Changes

- Rename package from `@jderjs/core` to `@jderstd/core`

### What's Changed

- Update documentation

## 0.3.0 (2025-08-13)

### Breaking Changes

- Support new standard

### Migrating from 0.2.0 to 0.3.0

```diff
import {
    createJsonResponse,
} from "@jderjs/core";

const route = (): Response => {
    return createJsonResponse({
-       error: {
-           code: "parse",
-           field: "title",
-           message: "Invalid title",
-       },
+       errors: [
+           {
+               code: "parse",
+               path: ["json", "title"],
+               message: "Invalid title",
+           }
+       ],
    });
}
```

## 0.2.0 (2025-08-06)

### What's Changed

- Allow to skip `success: false` for failure response
- Internal API changes

## 0.1.3 (2025-06-12)

### What's Changed

- Update types

## 0.1.2 (2025-05-26)

### What's Changed

- Optimization
- Update documentation

## 0.1.1 (2025-05-20)

### What's Changed

- Update documentation

## 0.1.0 (2025-05-18)

First release
