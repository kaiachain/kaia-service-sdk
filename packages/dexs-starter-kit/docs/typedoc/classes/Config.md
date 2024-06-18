[@kaiachain/kss-dexs](../README.md) / [Modules](../modules.md) / Config

# Class: Config

## Table of contents

### Constructors

- [constructor](Config.md#constructor)

### Properties

- [factory](Config.md#factory)
- [farming](Config.md#farming)
- [multiSig](Config.md#multisig)
- [router](Config.md#router)
- [staking](Config.md#staking)

### Methods

- [getAddressOfWKLAY](Config.md#getaddressofwklay)
- [getLP](Config.md#getlp)
- [getPair](Config.md#getpair)
- [initDex](Config.md#initdex)
- [initFarming](Config.md#initfarming)
- [initMultiSig](Config.md#initmultisig)
- [initStaking](Config.md#initstaking)

## Constructors

### constructor

• **new Config**()

## Properties

### factory

• **factory**: `undefined` \| `DexFactory`

#### Defined in

[Config.ts:12](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L12)

___

### farming

• **farming**: `undefined` \| `Farming`

#### Defined in

[Config.ts:13](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L13)

___

### multiSig

• **multiSig**: `undefined` \| `MultiSigWallet`

#### Defined in

[Config.ts:15](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L15)

___

### router

• **router**: `undefined` \| `DexRouter`

#### Defined in

[Config.ts:11](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L11)

___

### staking

• **staking**: `undefined` \| `StakingInitializable`

#### Defined in

[Config.ts:14](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L14)

## Methods

### getAddressOfWKLAY

▸ **getAddressOfWKLAY**(`router`): `Promise`<`string`\>

A getter function to get WKLAY contract's address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `router` | `DexRouter` | instance of DexRouter contract. |

#### Returns

`Promise`<`string`\>

- WKLAY address.

#### Defined in

[Config.ts:59](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L59)

___

### getLP

▸ **getLP**(`pairAddress`, `rpcURL`): `DexPair`

A function to initialize instance of DexPair contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pairAddress` | `string` | address of DexPair contract. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`DexPair`

- DexPair contract's instance.

#### Defined in

[Config.ts:50](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L50)

___

### getPair

▸ **getPair**(`factory`, `tokenA`, `tokenB`, `privKey`, `rpcURL`): `Promise`<`DexPair`\>

A getter function to fetch instance of DexPair contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | `DexFactory` | instance of DexFactory contract. |
| `tokenA` | `string` | Address of token0 contract. |
| `tokenB` | `string` | Address of token1 contract. |
| `privKey` | `string` | private key of signer account. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`Promise`<`DexPair`\>

- DexPair contract's instance.

#### Defined in

[Config.ts:39](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L39)

___

### initDex

▸ **initDex**(`routerAddress`, `factoryAddress`, `privKey`, `rpcURL`): [`DexFactory`, `DexRouter`]

A function to initialize the DEX contracts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `routerAddress` | `string` | address of the router contract |
| `factoryAddress` | `string` | address of the factory contract |
| `privKey` | `string` | private key of signer |
| `rpcURL` | `string` | RPC URL blockchain provider |

#### Returns

[`DexFactory`, `DexRouter`]

- contract instances of DexFactory & DexRouter.

#### Defined in

[Config.ts:24](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L24)

___

### initFarming

▸ **initFarming**(`farmAddress`, `privKey`, `rpcURL`): `Farming`

A function to initialize instance of Farming contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `farmAddress` | `string` | address of farming contract. |
| `privKey` | `string` | private key of signer. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`Farming`

- Farming contract's instance.

#### Defined in

[Config.ts:70](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L70)

___

### initMultiSig

▸ **initMultiSig**(`multiSigAddress`, `privKey`, `rpcURL`): `MultiSigWallet`

A function to initialize instance of MultiSigWallet contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multiSigAddress` | `string` | address of MultiSigWallet contract. |
| `privKey` | `string` | private key of signer. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`MultiSigWallet`

- MultiSigWallet contract's instance.

#### Defined in

[Config.ts:92](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L92)

___

### initStaking

▸ **initStaking**(`stakingAddress`, `privKey`, `rpcURL`): `StakingInitializable`

A function to initialize instance of Farming contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stakingAddress` | `string` | address of staking contract. |
| `privKey` | `string` | private key of signer. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`StakingInitializable`

- Staking contract's instance.

#### Defined in

[Config.ts:81](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Config.ts#L81)