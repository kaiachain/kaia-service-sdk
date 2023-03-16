
![Logo](./KlaytnLogo.png)
- [Klaytn Service SDK](#klaytn-service-sdk)
  - [Oracles Module](#oracles-module)
    - [Witnet](#witnet)
  - [Bridges Module](#bridges-module)
    - [Celer Bridge](#celer-bridge)
    - [Wormhole Bridge](#wormhole-bridge)
  - [DEX Module](#dex-module)
    - [Open source DEX](#open-source-dex)
- [Getting started](#getting-started)
  - [Quick Usage](#quick-usage)
  - [Setup Locally](#setup-locally)
    - [Requirement](#requirement)
    - [Steps to setup locally](#steps-to-setup-locally)
- [Usage](#usage)
  - [Want to Contribute to Klaytn Service SDK? ](#want-to-contribute-to-klaytn-service-sdk-)

<br/>

# Klaytn Service SDK
<p style="font-size:x-large">Klaytn Service SDK is a monorepo of all the ecosystem tools. It has all the packages necessary to build on Klaytn ecosystem</p>

## Oracles Module
### Witnet
Implementation of the following features using the [Hardhat](https://hardhat.org/) development environment:
- [Witnet Data Feeds on Klaytn](/packages/oracles-starter-kit/README.md#witnet-price-feeds)
- [Witnet Randomness on Klaytn](/packages/oracles-starter-kit/README.md#witnet-randomness)


## Bridges Module
### Celer Bridge
Implementations:
- [PoolBased Transfer](/packages/bridges-starter-kit/celer/README.md#1poolbased-transfer)
- [PoolBased Transfer Refund](/packages/bridges-starter-kit/celer/README.md#12poolbased-transfer-refund)
- [MintCanoncialToken](/packages/bridges-starter-kit/celer/README.md#2mint-canonical-token)
- [MintCanoncialToken Refund](/packages/bridges-starter-kit/celer/README.md#21mint-canoncial-token-refund)
- [BurnCanoncialToken](/packages/bridges-starter-kit/celer/README.md#3burn-canonical-token)
- [BurnCanoncialToken Refund](/packages/bridges-starter-kit/celer/README.md#31burn-canoncial-token-refund)

### Wormhole Bridge
Implementations:
- [Token Attestation](/packages/bridges-starter-kit/wormhole/README.md#1token-attestation)
- [Transfer Tokens](/packages/bridges-starter-kit/wormhole/README.md#2transfer-tokens)

## DEX Module
### Open source DEX
Integration of the following 5 DEX contracts:
- [Swap](/packages/dexs-starter-kit/core/Swap.ts)
- [Liquidity](/packages/dexs-starter-kit/core/Liquidity.ts)
- [Farming](/packages/dexs-starter-kit/core/Farming.ts)
- [Staking](/packages/dexs-starter-kit/core/Staking.ts)

# Getting started

## Quick Usage

To use the packages in an existing nodejs project, below are the published packages as part of the klaytn-service-sdk. Please follow the readme in below links about importing the package and using the features. 

- [@klaytn/kss-bridges-wormhole](https://www.npmjs.com/package/@klaytn/kss-bridges-wormhole) - Contains Wormhole integration
- [@klaytn/kss-bridges-celer](https://www.npmjs.com/package/@klaytn/kss-bridges-celer) - Contains Celer integration 
- [@klaytn/kss-dexs](https://www.npmjs.com/package/@klaytn/kss-dexs) - Contains Dexs integration
- [@klaytn/kss-oracles](https://www.npmjs.com/package/@klaytn/kss-oracles) - Contains Oracles integration
- [@klaytn/kss-cli](https://www.npmjs.com/package/@klaytn/kss-cli) - Contains CLI features

## Setup Locally

If you would like to explore current repository, please follow below instructions.

### Requirement
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version`and get an output like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm

> If you're familiar with `npx` and `npm` instead of `yarn`, you can use `npx` for execution and `npm` for installing dependencies.

### Steps to setup locally

After installing all the requirements, run the following to setup locally:
```bash
git clone https://github.com/klaytn/klaytn-service-sdk
cd klaytn-service-sdk
```
then
```bash
yarn
```

or
```bash
npm i
```

<br/>

# Usage
You can run the scripts from respective packages by `cd` into the packages. 

## Want to Contribute to Klaytn Service SDK? <a id="want-to-contribute"></a>

In line with our commitment to decentralization, all Klaytn codebase and its documentations are completely open source. Klaytn always welcomes your contribution. Anyone can view, edit, fix its contents and make suggestions. You can either create a pull request on GitHub or create a enhancement request. Make sure to check our [Contributor License Agreement (CLA)](https://gist.github.com/e78f99e1c527225637e269cff1bc7e49) first and there are also a few guidelines our contributors would check out before contributing:

- [Contribution Guide](./CONTRIBUTING.md)
- [License](./LICENSE)
- [Code of Conducts](./code-of-conduct.md)