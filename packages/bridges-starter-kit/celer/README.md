# Kaia cBridge starter kit
- [Kaia cBridge starter kit](#kaia-cbridge-starter-kit)
  - [About](#about)
  - [Folder Structure](#folder-structure)
  - [Setup](#setup)
  - [Overview](#overview)
  - [Reference Docs:](#reference-docs)

## About
cBridge provides a simple liquidity provider experience and high liquidity efficiency for users when they manage their funds in different
chains with lower costs.

## Folder Structure

- [use-cases](./use-cases): Ready-to-run code examples to call the cBridge gateway via the REST API.
- [core](./core): cBridge client implementation.
  - [APIs](./core/APIs): cBridge client core logic.
  - [contracts](./core/contract): Generated cBridge contract ABIs and bindings.
  - [proto](./core/proto): gRPC-Web Protobuf definitions.
  - [ts-proto](./core/ts-proto): Generated .d.ts gRPC-Web bindings.

## Setup
To setup locally and install dependencies, follow below command
```shell
npm install
```

## Overview
For details information & documentation of each module of this package please refer to the docs linked below.
- ### [Overview](https://github.com/kaiachain/kaia-service-sdk/blob/main/packages/bridges-starter-kit/celer/docs/Overview.md)
- ### [ParamsExplanation](https://github.com/kaiachain/kaia-service-sdk/blob/main/packages/bridges-starter-kit/celer/docs/ParamsExplanation.md)
- ### [Prerequisites.md](https://github.com/kaiachain/kaia-service-sdk/blob/main/packages/bridges-starter-kit/celer/docs/Prerequisites.md)

## Reference Docs:

- https://cbridge-docs.celer.network/developer/cbridge-sdk
- https://github.com/celer-network/cBridge-typescript-client
- https://test-cbridge-v2.celer.network/ (Testnet Website URL)
- https://cbridge.celer.network (Mainnet Website URL)