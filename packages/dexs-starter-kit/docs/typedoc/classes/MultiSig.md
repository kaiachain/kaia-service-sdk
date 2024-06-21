[@kaiachain/kss-dexs](../README.md) / [Modules](../modules.md) / MultiSig

# Class: MultiSig

## Table of contents

### Constructors

- [constructor](MultiSig.md#constructor)

### Properties

- [multiSig](MultiSig.md#multisig)

### Methods

- [confirmAndExecuteTransaction](MultiSig.md#confirmandexecutetransaction)
- [executeTransaction](MultiSig.md#executetransaction)
- [getMultiSig](MultiSig.md#getmultisig)
- [isConfirmed](MultiSig.md#isconfirmed)
- [revokeConfirmation](MultiSig.md#revokeconfirmation)
- [submitTransaction](MultiSig.md#submittransaction)

## Constructors

### constructor

• **new MultiSig**(`multiSigAddress`, `privKey`, `rpcURL`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multiSigAddress` | `string` |
| `privKey` | `string` |
| `rpcURL` | `string` |

#### Defined in

[MultiSig.ts:7](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L7)

## Properties

### multiSig

• **multiSig**: `MultiSigWallet`

#### Defined in

[MultiSig.ts:5](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L5)

## Methods

### confirmAndExecuteTransaction

▸ **confirmAndExecuteTransaction**(`transactionId`): `Promise`<`ContractTransaction`\>

A function to vote & execute the transaction (if it has received enough votes).

**`Notice`**

only registered owner on MULTISIG contract can execute this function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | the id of the transaction you want to vote and execute. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[MultiSig.ts:34](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L34)

___

### executeTransaction

▸ **executeTransaction**(`transactionId`): `Promise`<`ContractTransaction`\>

A function execute the given transaction id (if it has already received enough votes).

**`Notice`**

only registered owner on MULTISIG contract can execute this function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | the id of the transaction needs to be executed. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[MultiSig.ts:58](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L58)

___

### getMultiSig

▸ **getMultiSig**(): `MultiSigWallet`

A getter function to return Multisig contract's instance

#### Returns

`MultiSigWallet`

- MULTISIG Wallet contract's instance.

#### Defined in

[MultiSig.ts:79](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L79)

___

### isConfirmed

▸ **isConfirmed**(`transactionId`): `Promise`<`boolean`\>

A function to check if given transactionId has got enought votes or not

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | the id of the transaction needs to be checked. |

#### Returns

`Promise`<`boolean`\>

- flag indicating if transaction got enough votes or not (true/false).

#### Defined in

[MultiSig.ts:68](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L68)

___

### revokeConfirmation

▸ **revokeConfirmation**(`transactionId`): `Promise`<`ContractTransaction`\>

A function to revoke vote from given transaction id.

**`Notice`**

only registered owner on MULTISIG contract & who has already voted the given transactionId can execute this function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | the id of the transaction needs to be executed. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[MultiSig.ts:46](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L46)

___

### submitTransaction

▸ **submitTransaction**(`destination`, `value`, `data`): `Promise`<`ContractTransaction`\>

A function to submit transaction on MULTISIG contract for later votings & execution.

**`Notice`**

only registered owner on MULTISIG contract & who has already voted the given transactionId can execute this function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `string` | the contract on which given rawTx to be executed (once got enough votes). |
| `value` | `string` | KLAY amount to send in wei (if no value to send pass 0). |
| `data` | `string` | the encoded rawTx data which is required to be submitted. |

#### Returns

`Promise`<`ContractTransaction`\>

- ContractTransaction object.

#### Defined in

[MultiSig.ts:19](https://github.com/kaiachain/kaia-service-sdk/blob/d936278/packages/dexs-starter-kit/core/MultiSig.ts#L19)