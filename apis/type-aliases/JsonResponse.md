[@jderstd/core](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: [@types/response.ts:25](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L25)

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data

```ts
data: D | null;
```

Defined in: [@types/response.ts:29](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L29)

Requested information for the response when `success` is `true`.

***

### errors

```ts
errors: JsonResponseError[];
```

Defined in: [@types/response.ts:31](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L31)

A list of errors for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: [@types/response.ts:27](https://github.com/jderstd/javascript/blob/0e17f47863a5f2f0e1f89f9da9574224cbe654ad/package/src/@types/response.ts#L27)

Indicates whether the response is successful or not.
