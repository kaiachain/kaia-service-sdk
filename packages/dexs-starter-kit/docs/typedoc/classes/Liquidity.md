[@kaiachain/kss-dexs](../README.md) / [Modules](../modules.md) / Liquidity

# Class: Liquidity

## Table of contents

### Constructors

- [constructor](Liquidity.md#constructor)

### Properties

- [factory](Liquidity.md#factory)
- [router](Liquidity.md#router)

### Methods

- [add](Liquidity.md#add)
- [addWithKlay](Liquidity.md#addwithklay)
- [getAddressOfWKLAY](Liquidity.md#getaddressofwklay)
- [getPair](Liquidity.md#getpair)
- [getRouter](Liquidity.md#getrouter)
- [remove](Liquidity.md#remove)
- [removeWithKlay](Liquidity.md#removewithklay)

## Constructors

### constructor

• **new Liquidity**(`routerAddress`, `factoryAddress`, `privKey`, `rpcURL`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `routerAddress` | `string` |
| `factoryAddress` | `string` |
| `privKey` | `string` |
| `rpcURL` | `string` |

#### Defined in

[Liquidity.ts:8](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L8)

## Properties

### factory

• **factory**: `DexFactory`

#### Defined in

[Liquidity.ts:6](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L6)

___

### router

• **router**: `DexRouter`

#### Defined in

[Liquidity.ts:5](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L5)

## Methods

### add

▸ **add**(`token0Address`, `token1Address`, `amount0Desired`, `amount1Desired`, `amount0Min`, `amount1Min`, `deadline`): `Promise`<`ContractTransaction`\>

A function to add liquidity to a given pair of tokens (token0 & token1).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token0Address` | `string` | token0 a KIP7 contract's address of a given pair of tokens (whose liquidity to be added). |
| `token1Address` | `string` | token1 a KIP7 contract's address of a given pair of tokens (whose liquidity to be added). |
| `amount0Desired` | `string` | desired / max amount of the tokens of token0 want to add as liquidity. |
| `amount1Desired` | `string` | desired / max amount of the tokens of token1 want to add as liquidity. |
| `amount0Min` | `string` | minimum amount of the tokens of token0 want to add as liquidity. |
| `amount1Min` | `string` | minimum amount of the tokens of token1 want to add as liquidity. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Liquidity.ts:30](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L30)

___

### addWithKlay

▸ **addWithKlay**(`token`, `amountTokenDesired`, `amountKlayDesired`, `amountTokenMin`, `amountKlayMin`, `deadline`): `Promise`<`ContractTransaction`\>

A function to add liquidity with Klay to a given pair of tokens (token & Klay).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | token a KIP7 contract's address of a given pair of tokens (whose liquidity to be added). |
| `amountTokenDesired` | `string` | desired / max amount of the tokens of Token want to add as liquidity. |
| `amountKlayDesired` | `string` | desired / max amount of the tokens of Klay want to add as liquidity. |
| `amountTokenMin` | `string` | minimum amount of the tokens of Token want to add as liquidity. |
| `amountKlayMin` | `string` | minimum amount of the tokens of Klay want to add as liquidity. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Liquidity.ts:54](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L54)

___

### getAddressOfWKLAY

▸ **getAddressOfWKLAY**(): `Promise`<`string`\>

A getter function to get WKLAY contract's address

#### Returns

`Promise`<`string`\>

- WKLAY address.

#### Defined in

[Liquidity.ts:134](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L134)

___

### getPair

▸ **getPair**(`token0Address`, `token1Address`, `privKey`, `rpcURL`): `Promise`<`DexPair`\>

A getter function to fetch instance of DexPair contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token0Address` | `string` | Address of token0 contract. |
| `token1Address` | `string` | Address of token1 contract. |
| `privKey` | `string` | private key of signer account. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`Promise`<`DexPair`\>

- DexPair contract's instance.

#### Defined in

[Liquidity.ts:125](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L125)

___

### getRouter

▸ **getRouter**(): `DexRouter`

A getter function for DEX's Router contract's instance

#### Returns

`DexRouter`

- DexRouter contract's instance.

#### Defined in

[Liquidity.ts:17](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L17)

___

### remove

▸ **remove**(`pair`, `liquidity`, `amount0Min`, `amount1Min`, `deadline`): `Promise`<`ContractTransaction`\>

A function to remove liquidity from a given pair of tokens (token0 & token1).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pair` | `DexPair` | instance of DexPair from whom liquidity to be removed. |
| `liquidity` | `string` | amount of LP token known as liquidity which is required to be removed. |
| `amount0Min` | `string` | minimum amount of the tokens of token0 want to receive. |
| `amount1Min` | `string` | minimum amount of the tokens of token1 want to receive. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Liquidity.ts:76](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L76)

___

### removeWithKlay

▸ **removeWithKlay**(`pair`, `liquidity`, `amountTokenMin`, `amountKlayMin`, `deadline`): `Promise`<`ContractTransaction`\>

A function to remove liquidity from a given pair of tokens (token & klay).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pair` | `DexPair` | instance of DexPair from whom liquidity to be removed. |
| `liquidity` | `string` | amount of LP token known as liquidity which is required to be removed. |
| `amountTokenMin` | `string` | minimum amount of the tokens of Token want to receive. |
| `amountKlayMin` | `string` | minimum amount of the tokens of Klay want to receive. |
| `deadline` | `string` | UTC timestamp as deadline of this transaction, once deadline passed on-chain transaction should be reverted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Liquidity.ts:101](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Liquidity.ts#L101)