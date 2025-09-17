[@jderjs/core](../README.md) / JsonResponseError

# Type Alias: JsonResponseError

```ts
type JsonResponseError = object;
```

Defined in: [@types/response.ts:8](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L8)

JSON response error.

## Properties

### code

```ts
code: string;
```

Defined in: [@types/response.ts:10](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L10)

Code representing the error.

***

### message?

```ts
optional message: string;
```

Defined in: [@types/response.ts:14](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L14)

Detail of the error.

***

### path?

```ts
optional path: string[];
```

Defined in: [@types/response.ts:12](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L12)

Indicates where the error occurred.
