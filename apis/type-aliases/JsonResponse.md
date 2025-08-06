[@jderjs/core](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: [@types/response.ts:18](https://github.com/jder-std/core.js/blob/ccb6f2fa28b92969dcb767a05c1efbaf6bcd3154/package/src/@types/response.ts#L18)

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data?

```ts
optional data: D;
```

Defined in: [@types/response.ts:22](https://github.com/jder-std/core.js/blob/ccb6f2fa28b92969dcb767a05c1efbaf6bcd3154/package/src/@types/response.ts#L22)

Data for the response when `success` is `true`.

***

### error?

```ts
optional error: JsonResponseError;
```

Defined in: [@types/response.ts:24](https://github.com/jder-std/core.js/blob/ccb6f2fa28b92969dcb767a05c1efbaf6bcd3154/package/src/@types/response.ts#L24)

Error for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: [@types/response.ts:20](https://github.com/jder-std/core.js/blob/ccb6f2fa28b92969dcb767a05c1efbaf6bcd3154/package/src/@types/response.ts#L20)

Whether the response is successful.
