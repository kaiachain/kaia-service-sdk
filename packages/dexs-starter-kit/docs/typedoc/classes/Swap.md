[@kaiachain/kss-dexs](../README.md) / [Modules](../modules.md) / Swap

# Class: Swap

## Table of contents

### Constructors

- [constructor](Swap.md#constructor)

### Properties

- [factory](Swap.md#factory)
- [router](Swap.md#router)

### Methods

- [exactKlayForTokens](Swap.md#exactklayfortokens)
- [exactTokensForKlay](Swap.md#exacttokensforklay)
- [exactTokensForTokens](Swap.md#exacttokensfortokens)
- [getAddressOfWKLAY](Swap.md#getaddressofwklay)
- [getPair](Swap.md#getpair)
- [getRouter](Swap.md#getrouter)
- [klayForExactTokens](Swap.md#klayforexacttokens)
- [tokensForExactKlay](Swap.md#tokensforexactklay)
- [tokensForExactTokens](Swap.md#tokensforexacttokens)

## Constructors

### constructor

• **new Swap**(`routerAddress`, `factoryAddress`, `privKey`, `rpcURL`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `routerAddress` | `string` |
| `factoryAddress` | `string` |
| `privKey` | `string` |
| `rpcURL` | `string` |

#### Defined in

[Swap.ts:8](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L8)

## Properties

### factory

• **factory**: `DexFactory`

#### Defined in

[Swap.ts:6](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L6)

___

### router

• **router**: `DexRouter`

#### Defined in

[Swap.ts:5](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L5)

## Methods

### exactKlayForTokens

▸ **exactKlayForTokens**(`amountKlayIn`, `amountDesiredOutMin`, `path`, `deadline`): `Promise`<`ContractTransaction`\>

A function to swap exact amount of KLAY for a given amount of Tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountKlayIn` | `string` | amount of WKLAY tokens to be swapped. |
| `amountDesiredOutMin` | `string` | minimum amount of tokens expecting to receive. |
| `path` | `string`[] | a pair of tokens address, path[0] should be the address of WKLAY & path[1] should be the address of out Token. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Swap.ts:59](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L59)

___

### exactTokensForKlay

▸ **exactTokensForKlay**(`amountIn`, `amountDesiredKlayOut`, `path`, `deadline`): `Promise`<`ContractTransaction`\>

A function to swap exact amount of Tokens for a given amount of KLAY.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountIn` | `string` | amount of Token to be swapped. |
| `amountDesiredKlayOut` | `string` | minimum amount of KLAYs expecting to receive. |
| `path` | `string`[] | a pair of tokens addresses, path[0] should be the address of Token & path[1] should be the address of WKLAY. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Swap.ts:98](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L98)

___

### exactTokensForTokens

▸ **exactTokensForTokens**(`amountIn`, `amountDesiredOut`, `path`, `deadline`): `Promise`<`ContractTransaction`\>

A function to swap exact amount of Tokens for a given amount of Tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountIn` | `string` | amount of Token to be swapped. |
| `amountDesiredOut` | `string` | minimum amount of Tokens expecting to receive. |
| `path` | `string`[] | a pair of tokens addresses, path[0] should be the address of input Token & path[1] should be the address of output Token. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. * |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Swap.ts:21](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L21)

___

### getAddressOfWKLAY

▸ **getAddressOfWKLAY**(): `Promise`<`string`\>

A getter function to get WKLAY contract's address

#### Returns

`Promise`<`string`\>

- WKLAY address.

#### Defined in

[Swap.ts:152](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L152)

___

### getPair

▸ **getPair**(`tokenA`, `tokenB`, `privKey`, `rpcURL`): `Promise`<`DexPair`\>

A getter function to fetch instance of DexPair contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenA` | `string` | Address of token0 contract. |
| `tokenB` | `string` | Address of token1 contract. |
| `privKey` | `string` | private key of signer account. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`Promise`<`DexPair`\>

- DexPair contract's instance.

#### Defined in

[Swap.ts:143](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L143)

___

### getRouter

▸ **getRouter**(): `DexRouter`

A getter function to return DexRouter contract's instance

#### Returns

`DexRouter`

- DexRouter contract's instance.

#### Defined in

[Swap.ts:133](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L133)

___

### klayForExactTokens

▸ **klayForExactTokens**(`amountKlayIn`, `amountDesiredOut`, `path`, `deadline`): `Promise`<`ContractTransaction`\>

A function to swap KLAYs for a given exact amount of Tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountKlayIn` | `string` | max amount of WKLAY to be swapped. |
| `amountDesiredOut` | `string` | exact amount of Tokens expecting to receive. |
| `path` | `string`[] | a pair of tokens addresses, path[0] should be the address of WKLAY & path[1] should be the address of output Token. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Swap.ts:117](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L117)

___

### tokensForExactKlay

▸ **tokensForExactKlay**(`amountKlayOut`, `amountDesiredTokenMaxIn`, `path`, `deadline`): `Promise`<`ContractTransaction`\>

A function to swap given amount of Tokens for exact amount of KLAYs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountKlayOut` | `string` | exact amount of KLAYs expecting to receive. |
| `amountDesiredTokenMaxIn` | `string` | max amount of Tokens to be swapped. |
| `path` | `string`[] | a pair of tokens addresses, path[0] should be the address of Token & path[1] should be the address of WKLAY. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Swap.ts:78](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L78)

___

### tokensForExactTokens

▸ **tokensForExactTokens**(`amountOut`, `amountDesiredMaxIn`, `path`, `deadline`): `Promise`<`ContractTransaction`\>

A function to swap given amount of Tokens for exact amount of KLAYs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountOut` | `string` | exact amount of KLAYs expecting to receive. |
| `amountDesiredMaxIn` | `string` | max amount of Tokens to be swapped. |
| `path` | `string`[] | a pair of tokens addresses, path[0] should be the address of Token & path[1] should be the address of WKLAY. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Swap.ts:40](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Swap.ts#L40)