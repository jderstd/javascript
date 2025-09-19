[@jderstd/core](../README.md) / JsonResponseError

# Type Alias: JsonResponseError

```ts
type JsonResponseError = object;
```

Defined in: [@types/response.ts:8](https://github.com/jderstd/javascript/blob/02a527e4c93d44346d8d60c7eebfc9fd7e020c79/packages/core/src/@types/response.ts#L8)

JSON response error.

## Properties

### code

```ts
code: string;
```

Defined in: [@types/response.ts:10](https://github.com/jderstd/javascript/blob/02a527e4c93d44346d8d60c7eebfc9fd7e020c79/packages/core/src/@types/response.ts#L10)

Code representing the error.

***

### message?

```ts
optional message: string;
```

Defined in: [@types/response.ts:14](https://github.com/jderstd/javascript/blob/02a527e4c93d44346d8d60c7eebfc9fd7e020c79/packages/core/src/@types/response.ts#L14)

Detail of the error.

***

### path?

```ts
optional path: string[];
```

Defined in: [@types/response.ts:12](https://github.com/jderstd/javascript/blob/02a527e4c93d44346d8d60c7eebfc9fd7e020c79/packages/core/src/@types/response.ts#L12)

Indicates where the error occurred.
