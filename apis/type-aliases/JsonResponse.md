[@jderjs/core](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: [@types/response.ts:18](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L18)

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data?

```ts
optional data: D;
```

Defined in: [@types/response.ts:22](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L22)

Requested information for the response when `success` is `true`.

***

### errors?

```ts
optional errors: JsonResponseError[];
```

Defined in: [@types/response.ts:24](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L24)

A list of errors for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: [@types/response.ts:20](https://github.com/jderstd/core.js/blob/88b7c6e9a21520763360f335ecab84107f81b456/package/src/@types/response.ts#L20)

Indicates whether the response is successful or not.
