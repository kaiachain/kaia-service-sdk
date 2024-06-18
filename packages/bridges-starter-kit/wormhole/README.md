# Kaia wormhole starter kit
- [Kaia wormhole starter kit](#kaia-wormhole-starter-kit)
  - [About](#about)
  - [Folder Structure](#folder-structure)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [1. Token Attestation](#1-token-attestation)
    - [Parameters](#parameters)
    - [Returns](#returns)
    - [Example](#example)
  - [2.Transfer Tokens](#2transfer-tokens)
    - [Parameters](#parameters-1)
    - [Returns](#returns-1)
    - [Example](#example-1)
  - [Reference Docs:](#reference-docs)

## About
Wormhole is a communication bridge between Kaia and other top decentralized finance (DeFi) networks. Existing projects, platforms, and communities are able to move tokenized assets seamlessly across blockchains and benefit from Kaia's high speed and low cost.

## Folder Structure

- [core](./core): it includes @wormhole-sdk and the contracts ABIs
- [use-cases](./use-cases): Ready-to-run code of some use-cases to call the Wormhole Rest APIs.

## Installation
`npm install @kaiachain/kss-bridges-wormhole --save`

## Quick Start
BridgeSDK contains the implementation of the bridge use-cases. 
CoreBridgeSDK exposes methods of `@certusone/wormhole-sdk` to write custom methods.

```typescript
import BridgeSDK from '@kaiachain/kss-bridges-wormhole';
import CoreBridgeSDK from '@kaiachain/kss-bridges-wormhole/core';

or

const BridgeSDK = require('@kaiachain/kss-bridges-wormhole');
const CoreBridgeSDK = require('@kaiachain/kss-bridges-wormhole/core');
```

You can run following ready-made use-cases to test
## 1. Token Attestation
Attests a token of one chain (source chain) to another chain (destination chain) for EVM compatible chains.

```typescript
BridgeSDK.attest(config, source, destination)
```

> **_NOTE:_**  Make sure the Token to be attested is present in source chain. Native fee coins in source and destination chain in the provided privatekey account is sufficient.

### Parameters
1. `Object` - `config`
   * `restAddress` - `string` wormhole api url. See [Wormhole Rpc Nodes](https://book.wormhole.com/reference/rpcnodes.html) for reference.
2. `Object` - `source`
   * `token` - `string` token contract address to be attested
   * `privatekey` - `string` privatekey to perform transactions
   * `rpcUrl` - `string` blockchain rpc url
   * `coreBridge` - `string` core bridge contract address. see [Testnet CoreBridge](https://book.wormhole.com/reference/contracts.html#core-bridge-1) for reference.
   * `tokenBridge` - `string` token bridge contract address. see [Testnet TokenBridge](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.
   * `wormholeChainId` - `string` wormhole chainID. see [Testnet WormholeChainID](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.
3. `Object` - `destination`
   * `privatekey` - `string` privatekey to perform transactions
   * `rpcUrl` -  `string` blockchain rpc url
   * `tokenBridge` - `string` token bridge contract address. see [Testnet TokenBridge](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.
   * `wormholeChainId` - `string` wormhole chainID. see [Testnet WormholeChainID](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.

### Returns
`String` - Deployed contract address on Destination chain

### Example
```typescript
const BridgeSDK = require('@kaiachain/kss-bridges-wormhole');
const CoreBridgeSDK = require('@kaiachain/kss-bridges-wormhole/core');

const config = { restAddress: "https://wormhole-v2-testnet-api.certus.one" };
const source = {
  token: "0x0FD3f122A9B6471928B60eeE73bF35D895C4Ee01", // Token to be attested
  privatekey: "source chain private key",
  rpcUrl: "https://public-en.kairos.node.kaia.io",
  coreBridge: "0x1830CC6eE66c84D2F177B94D544967c774E624cA",
  tokenBridge: "0xC7A13BE098720840dEa132D860fDfa030884b09A",
  wormholeChainId: "13" 
};
const destination = {
  privatekey: "destination chain private key",
  rpcUrl: "https://ethereum-goerli-rpc.allthatnode.com",
  tokenBridge: "0xF890982f9310df57d00f659cf4fd87e65adEd8d7",
  wormholeChainId: "2" 
}

console.log(CoreBridgeSDK.CHAINS); // prints the chains from @certusone/wormhole-sdk

const destinationDeployedContract = await BridgeSDK.attest(config, source, destination);

// Destination chain deployed contract
console.log(destinationDeployedContract); // 0xfdA23F910E5CE6b7C712F624DE20d9cC3A5d2122
```

## 2.Transfer Tokens
Transfer tokens from source chain to destination chain for EVM compatible chains.

```typescript
BridgeSDK.transferBasic(config, source, destination, AMOUNT, IS_NATIVE)
```

> **_NOTE:_**  Make sure the tokens/coins is present in source chain. Native fee coins in source and destination chain in the provided privatekey account is sufficient.

### Parameters
1. `Object` - `config`
   * `restAddress` - `string` wormhole api url. See [Wormhole Rpc Nodes](https://book.wormhole.com/reference/rpcnodes.html) for reference.
2. `Object` - `source`
   * `token` - `string` token contract address. Provide if `IS_NATIVE` is false.
   * `privatekey` - `string` privatekey to perform transactions
   * `rpcUrl` - `string` blockchain rpc url
   * `coreBridge` - `string` core bridge contract address. see [Testnet CoreBridge](https://book.wormhole.com/reference/contracts.html#core-bridge-1) for reference.
   * `tokenBridge` - `string` token bridge contract address. see [Testnet TokenBridge](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.
   * `wormholeChainId` - `string` wormhole chainID. see [Testnet WormholeChainID](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.
3. `Object` - `destination`
   * `privatekey` - `string` privatekey to perform transactions
   * `rpcUrl` -  `string` blockchain rpc url
   * `tokenBridge` - `string` token bridge contract address. see [Testnet TokenBridge](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.
   * `wormholeChainId` - `string` wormhole chainID. see [Testnet WormholeChainID](https://book.wormhole.com/reference/contracts.html#token-bridge-1) for reference.
4. `Amount` - `string` - Amount to be transferred.
5. `IS_NATIVE` - `boolean` - Provide `true` if its a native coin transfer from source and `false` if its a token transfer.

### Returns
`Object` - Transaction Object

### Example
```typescript
const BridgeSDK = require('@kaiachain/kss-bridges-wormhole');
const CoreBridgeSDK = require('@kaiachain/kss-bridges-wormhole/core');

const config = { restAddress: "https://wormhole-v2-testnet-api.certus.one" };
const source = {
  token: "0x0FD3f122A9B6471928B60eeE73bF35D895C4Ee01", // Token to be attested
  privatekey: "source chain private key",
  rpcUrl: "https://public-en.kairos.node.kaia.io",
  coreBridge: "0x1830CC6eE66c84D2F177B94D544967c774E624cA",
  tokenBridge: "0xC7A13BE098720840dEa132D860fDfa030884b09A",
  wormholeChainId: "13" 
};
const destination = {
  privatekey: "destination chain private key",
  rpcUrl: "https://ethereum-goerli-rpc.allthatnode.com",
  tokenBridge: "0xF890982f9310df57d00f659cf4fd87e65adEd8d7",
  wormholeChainId: "2" 
}
// Transfers 1 token from source chain's provided token address.
const AMOUNT = "1";
const IS_NATIVE = false;

console.log(CoreBridgeSDK.CHAINS); // prints the chains from @certusone/wormhole-sdk

const result = await BridgeSDK.transferBasic(config, source, destination, AMOUNT, IS_NATIVE);

// Transaction hash of the destination chain
console.log(result.hash);
```

## Reference Docs:

- [https://www.npmjs.com/package/@certusone/wormhole-sdk](https://www.npmjs.com/package/@certusone/wormhole-sdk) 
- [https://book.wormhole.com/technical/typescript/attestingToken.html](https://book.wormhole.com/technical/typescript/attestingToken.html)
- [Testnet Website URL](https://wormhole-foundation.github.io/example-token-bridge-ui/#/transfer)
- [Mainnet Website URL](https://www.portalbridge.com/#/transfer)