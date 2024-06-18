[@kaiachain/kss-dexs](../README.md) / [Modules](../modules.md) / Farming

# Class: Farming

## Table of contents

### Constructors

- [constructor](Farming.md#constructor)

### Properties

- [farming](Farming.md#farming)

### Methods

- [add](Farming.md#add)
- [deposit](Farming.md#deposit)
- [emergencyWithdraw](Farming.md#emergencywithdraw)
- [getFarm](Farming.md#getfarm)
- [getPair](Farming.md#getpair)
- [ptnGrantRole](Farming.md#ptngrantrole)
- [set](Farming.md#set)
- [updateMultiplier](Farming.md#updatemultiplier)
- [updatePtnPerBlock](Farming.md#updateptnperblock)
- [withdraw](Farming.md#withdraw)

## Constructors

### constructor

• **new Farming**(`farmingAddress`, `privKey`, `rpcURL`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `farmingAddress` | `string` |
| `privKey` | `string` |
| `rpcURL` | `string` |

#### Defined in

[Farming.ts:7](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L7)

## Properties

### farming

• **farming**: `Farming`

#### Defined in

[Farming.ts:5](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L5)

## Methods

### add

▸ **add**(`allocPoint`, `lpToken`, `bonusMultiplier`, `bonusEndBlock`): `Promise`<`string`\>

A function that encodes all the details required to create a new LP farming pool.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allocPoint` | `string` | Number of allocation points for the new pool. |
| `lpToken` | `string` | Address of the LP KIP7 token. |
| `bonusMultiplier` | `string` | The pool reward multipler. |
| `bonusEndBlock` | `string` | The block number after which the pool doesn't get any reward bonus from `bonusMultiplier`. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Farming.ts:88](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L88)

___

### deposit

▸ **deposit**(`poolId`, `amount`): `Promise`<`ContractTransaction`\>

A function to deposit given amount of LP token in given LP Farming pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolId` | `string` | pool id in which amount is going to be deposited. |
| `amount` | `string` | amount of the LP KIP7 token going to be deposited. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Farming.ts:17](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L17)

___

### emergencyWithdraw

▸ **emergencyWithdraw**(`poolId`): `Promise`<`ContractTransaction`\>

A function to emergency withdraw funds from given LP farming pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolId` | `string` | pool id of LP farming pool from where funds are to be withdrawn. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractReceipt object.

#### Defined in

[Farming.ts:47](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L47)

___

### getFarm

▸ **getFarm**(): `Farming`

A getter function for Farming contract's insstance

#### Returns

`Farming`

- Farming contract's instance.

#### Defined in

[Farming.ts:122](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L122)

___

### getPair

▸ **getPair**(`pairAddress`, `privKey`, `rpcURL`): `Promise`<`DexPair`\>

A getter function to fetch instance of DexPair contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pairAddress` | `string` | Address of DexPair contract. |
| `privKey` | `string` | private key of signer account. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`Promise`<`DexPair`\>

- DexPair contract's instance.

#### Defined in

[Farming.ts:133](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L133)

___

### ptnGrantRole

▸ **ptnGrantRole**(`ptnAddress`): `Promise`<`string` \| `boolean`\>

A function that encodes all the details required to grant minter role to Farming contract on platformToken contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptnAddress` | `string` | Address of the platform token i.e: ptnToken of whom minter role to be granted to Farming contract. |

#### Returns

`Promise`<`string` \| `boolean`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Farming.ts:110](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L110)

___

### set

▸ **set**(`allocPoint`, `poolId`): `Promise`<`string`\>

A function that encodes all the details required to update / set LP farming pool.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allocPoint` | `string` | Number of allocation points to be set in given farming pool. |
| `poolId` | `string` | id of the LP farming pool whose allocPoints to be set/updated. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Farming.ts:99](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L99)

___

### updateMultiplier

▸ **updateMultiplier**(`poolId`, `multiplier`): `Promise`<`string`\>

A function that encodes all the details required to update bonusMultiplier of given LP farming pool.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolId` | `string` | id of the LP farming pool whose bonusMultiplier to be updated. |
| `multiplier` | `string` | Number of allocation points to be set in given farming pool. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Farming.ts:65](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L65)

___

### updatePtnPerBlock

▸ **updatePtnPerBlock**(`rewardPerBlock`): `Promise`<`string`\>

A function that encodes all the details required to update rewardPerBlock of Farming contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardPerBlock` | `string` | Number of platform tokens to be given as reward per block. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Farming.ts:75](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L75)

___

### withdraw

▸ **withdraw**(`poolId`, `amount`): `Promise`<`ContractTransaction`\>

A function to withdraw LP tokens from given LP farming pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolId` | `string` | pool id of LP farming pool from which amount is going to be withdrawn. |
| `amount` | `string` | amount of the LP KIP7 token going to be withdrawn. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Farming.ts:33](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Farming.ts#L33)