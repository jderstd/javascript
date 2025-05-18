[@jderjs/core](../README.md) / JsonResponse

# Type Alias: JsonResponse\<D\>

```ts
type JsonResponse<D> = object;
```

Defined in: json/index.ts:14

JSON response.

## Type Parameters

### D

`D` = `unknown`

## Properties

### data?

```ts
optional data: D;
```

Defined in: json/index.ts:18

Data for the response when `success` is `true`.

***

### error?

```ts
optional error: JsonResponseError;
```

Defined in: json/index.ts:20

Error for the response when `success` is `false`.

***

### success

```ts
success: boolean;
```

Defined in: json/index.ts:16

Whether the response is successful.
