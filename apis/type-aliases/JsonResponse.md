[@jderjs/core](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: [json/index.ts:14](https://github.com/jder-std/core.js/blob/8f752d1679b827b4deb2cd21184bd81491ea8d2c/package/src/response/json/index.ts#L14)

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data?

```ts
optional data: D;
```

Defined in: [json/index.ts:18](https://github.com/jder-std/core.js/blob/8f752d1679b827b4deb2cd21184bd81491ea8d2c/package/src/response/json/index.ts#L18)

Data for the response when `success` is `true`.

***

### error?

```ts
optional error: JsonResponseError;
```

Defined in: [json/index.ts:20](https://github.com/jder-std/core.js/blob/8f752d1679b827b4deb2cd21184bd81491ea8d2c/package/src/response/json/index.ts#L20)

Error for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: [json/index.ts:16](https://github.com/jder-std/core.js/blob/8f752d1679b827b4deb2cd21184bd81491ea8d2c/package/src/response/json/index.ts#L16)

Whether the response is successful.
