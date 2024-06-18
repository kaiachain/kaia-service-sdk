[@kaiachain/kss-dexs](../README.md) / [Modules](../modules.md) / Staking

# Class: Staking

## Table of contents

### Constructors

- [constructor](Staking.md#constructor)

### Properties

- [staking](Staking.md#staking)

### Methods

- [deposit](Staking.md#deposit)
- [emergencyRewardWithdraw](Staking.md#emergencyrewardwithdraw)
- [emergencyWithdraw](Staking.md#emergencywithdraw)
- [getStaking](Staking.md#getstaking)
- [recoverToken](Staking.md#recovertoken)
- [stopReward](Staking.md#stopreward)
- [updatePoolLimitPerUser](Staking.md#updatepoollimitperuser)
- [updateRewardPerBlock](Staking.md#updaterewardperblock)
- [updateStartAndEndBlocks](Staking.md#updatestartandendblocks)
- [withdraw](Staking.md#withdraw)
- [FACTORY](Staking.md#factory)
- [deployPool](Staking.md#deploypool)

## Constructors

### constructor

• **new Staking**(`routerAddress`, `privKey`, `rpcURL`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `routerAddress` | `string` |
| `privKey` | `string` |
| `rpcURL` | `string` |

#### Defined in

[Staking.ts:7](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L7)

## Properties

### staking

• **staking**: `StakingInitializable`

#### Defined in

[Staking.ts:5](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L5)

## Methods

### deposit

▸ **deposit**(`amount`): `Promise`<`ContractTransaction`\>

A function to deposit given amount of Staked Token in given Staking Pool contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | amount of the KIP7 token (stakedToken) going to be staked. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Staking.ts:26](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L26)

___

### emergencyRewardWithdraw

▸ **emergencyRewardWithdraw**(`amount`, `recipient`): `Promise`<`string`\>

A function that encodes all the details required to emergency withdraw funds from given staking pool contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | amount of staked token to be withdrawn. |
| `recipient` | `string` | address of recipient account to whom staked tokens should be sent. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Staking.ts:113](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L113)

___

### emergencyWithdraw

▸ **emergencyWithdraw**(): `Promise`<`ContractTransaction`\>

A function to emergency withdraw funds from given Staking Pool contract.

#### Returns

`Promise`<`ContractTransaction`\>

- ContractReceipt object.

#### Defined in

[Staking.ts:56](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L56)

___

### getStaking

▸ **getStaking**(): `StakingInitializable`

A getter function to return Staking contract's instance

#### Returns

`StakingInitializable`

- Staking contract's instance.

#### Defined in

[Staking.ts:174](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L174)

___

### recoverToken

▸ **recoverToken**(`token`, `recipient`): `Promise`<`string`\>

A function that encodes all the details required to recover token (unintentionally transferred) from given staking pool contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | KIP7 token's address which is to be recovered. |
| `recipient` | `string` | address of recipient account to whom recovered tokens should be sent. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Staking.ts:124](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L124)

___

### stopReward

▸ **stopReward**(): `Promise`<`string`\>

A function that encodes all the details required to stop reward distribution in given staking pool contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Staking.ts:133](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L133)

___

### updatePoolLimitPerUser

▸ **updatePoolLimitPerUser**(`userLimit`, `poolLimit`): `Promise`<`string`\>

A function that encodes all the details required to update pool limit in given staking pool contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userLimit` | `boolean` | whether the limit remains forced. |
| `poolLimit` | `string` | new pool limit per user. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Staking.ts:144](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L144)

___

### updateRewardPerBlock

▸ **updateRewardPerBlock**(`rewardPerBlock`): `Promise`<`string`\>

A function that encodes all the details required to update reward per block in given staking pool contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardPerBlock` | `string` | new reward per block to be set. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Staking.ts:154](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L154)

___

### updateStartAndEndBlocks

▸ **updateStartAndEndBlocks**(`startRewardBlock`, `rewardEndBlock`): `Promise`<`string`\>

A function that encodes all the details required to update start and end blocks in given staking pool contract.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startRewardBlock` | `string` | new starting reward block number. |
| `rewardEndBlock` | `string` | new ending reward block number. |

#### Returns

`Promise`<`string`\>

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Staking.ts:165](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L165)

___

### withdraw

▸ **withdraw**(`amount`): `Promise`<`ContractTransaction`\>

A function to withdraw Staked tokens from given Staking pool contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | amount of the Staked Token (KIP7 token) going to be withdrawn. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[Staking.ts:42](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L42)

___

### FACTORY

▸ `Static` **FACTORY**(`factoryAddress`, `privKey`, `rpcURL`): `StakingFactory`

A function to initiate Staking Factory contract instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factoryAddress` | `string` | address of staking factory contract. |
| `privKey` | `string` | private key of signer account. |
| `rpcURL` | `string` | RPC URL of blockchain provider. |

#### Returns

`StakingFactory`

- instance of staking factory contract.

#### Defined in

[Staking.ts:17](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L17)

___

### deployPool

▸ `Static` **deployPool**(`factory`, `stakedTokenAddress`, `rewardTokenAddress`, `rewardPerBlock`, `startBlock`, `rewardEndBlock`, `poolLimitPerUser`, `numberBlocksForUserLimit`, `multiSigAddress`): `string`

A function that encodes all the details required to deploy a new Staking Pool.

**`Notice`**

- Output of this function should be submitted to MULTISIG contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | `StakingFactory` | Staking Factory contract's instance. |
| `stakedTokenAddress` | `string` | Address of the KIP7 token which will be staked in this Staking Pool. |
| `rewardTokenAddress` | `string` | Address of the KIP7 token in which stakers will get their reward. |
| `rewardPerBlock` | `string` | Number of tokens to be rewarded per block (in rewardToken) |
| `startBlock` | `string` | Block number from where staking will get started. |
| `rewardEndBlock` | `string` | Block number at which reward distribution will get ended. |
| `poolLimitPerUser` | `string` | pool limit per user in stakedToken (if any, else 0). |
| `numberBlocksForUserLimit` | `string` | block numbers available for user limit (after start block). |
| `multiSigAddress` | `string` | MULTISIG contract address. |

#### Returns

`string`

- encoded raw transaction data to be submitted & executed by Multisig contract.

#### Defined in

[Staking.ts:82](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/Staking.ts#L82)