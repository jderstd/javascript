[@jderstd/core](../README.md) / JsonResponseError

# Type Alias: JsonResponseError

```ts
type JsonResponseError = object;
```

Defined in: [@types/response.ts:10](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L10)

JSON response error.

## Properties

### code

```ts
code: string;
```

Defined in: [@types/response.ts:12](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L12)

Code representing the error.

***

### message

```ts
message: string | null;
```

Defined in: [@types/response.ts:16](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L16)

Detail of the error.

***

### path

```ts
path: string[];
```

Defined in: [@types/response.ts:14](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L14)

Indicates where the error occurred.
