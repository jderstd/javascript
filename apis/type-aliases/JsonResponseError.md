[@jderjs/core](../README.md) / JsonResponseError

# Type Alias: JsonResponseError

```ts
type JsonResponseError = object;
```

Defined in: [@types/response.ts:8](https://github.com/jder-std/core.js/blob/fa0b9604b54acf53ee32ab0dac79b01444945478/package/src/@types/response.ts#L8)

JSON response error.

## Properties

### code

```ts
code: string;
```

Defined in: [@types/response.ts:10](https://github.com/jder-std/core.js/blob/fa0b9604b54acf53ee32ab0dac79b01444945478/package/src/@types/response.ts#L10)

Code representing the error.

***

### message?

```ts
optional message: string;
```

Defined in: [@types/response.ts:14](https://github.com/jder-std/core.js/blob/fa0b9604b54acf53ee32ab0dac79b01444945478/package/src/@types/response.ts#L14)

Detail of the error.

***

### path?

```ts
optional path: string[];
```

Defined in: [@types/response.ts:12](https://github.com/jder-std/core.js/blob/fa0b9604b54acf53ee32ab0dac79b01444945478/package/src/@types/response.ts#L12)

Indicates where the error occurred.
