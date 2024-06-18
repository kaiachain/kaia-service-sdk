# Oracle Starter Kit
- [Oracle Starter Kit](#oracle-starter-kit)
  - [Install](#install)
  - [Quick Usage](#quick-usage)
  - [Setup Hardhat configurations Kairos Kaia network and variables](#setup-hardhat-configurations-kairos-kaia-network-and-variables)
    - [1. Hardhat configurations](#1-hardhat-configurations)
    - [2. Environment Variables](#2-environment-variables)
  - [Deploy contracts](#deploy-contracts)
  - [Interacting with Deployed Contracts](#interacting-with-deployed-contracts)
    - [Witnet Price Feeds](#witnet-price-feeds)
      - [Parameters](#parameters)
      - [Returns](#returns)
      - [Example](#example)
    - [Witnet Randomness](#witnet-randomness)
      - [1. Request new randomness](#1-request-new-randomness)
      - [Parameters](#parameters-1)
        - [Returns](#returns-1)
        - [Example](#example-1)
      - [2. Fetch Witnet random number](#2-fetch-witnet-random-number)
      - [Parameters](#parameters-2)
        - [Returns](#returns-2)
        - [Example](#example-2)
      - [3. Get the latest randomizing block](#3-get-the-latest-randomizing-block)
      - [Parameters](#parameters-3)
        - [Returns](#returns-3)
        - [Example](#example-3)
      - [4. Get the generated random number](#4-get-the-generated-random-number)
      - [Parameters](#parameters-4)
        - [Returns](#returns-4)
        - [Example](#example-4)
    - [Witnet Web Oracle Request](#witnet-web-oracle-request)
      - [Compile the Witnet queries into Solidity contracts](#compile-the-witnet-queries-into-solidity-contracts)
        - [Example](#example-5)
      - [Execute Witnet Queries](#execute-witnet-queries)
        - [Parameters](#parameters-5)
        - [Returns](#returns-5)
        - [Example 1 - Fetch Coinprice](#example-1---fetch-coinprice)
        - [Example 2 - Post Request](#example-2---post-request)
    - [Supra Price Feeds](#supra-price-feeds)
      - [Parameters](#parameters)
      - [Returns](#returns)
      - [Example](#example)
  - [Resources](#resources)

<br/>

Oracles take data from the outside world and put it into the blockchain for other smart contracts to consume.
This is a hardhat project containing contracts and scripts for `Witnet` integrations.

## Install

```typescript
npm install -g @kaiachain/kss-cli --force
```

## Quick Usage
For a default set of contracts and tests, run the following within the required project directory:

```typescript
> kss-cli oracle init

> cd oracle-starter-kit
> npm install --force
```

Above commands downloads the `oracle-starter-kit` folder structure in the current project directory. 
Enter inside the generated folder and install the packages as mentioned

From there you can run hardhat commands to compile your contracts, deploy those contracts to 
the network and run their associated unit tests.

## Setup Hardhat configurations Kairos Kaia network and variables
The default hardhat configurations can be modified in `helper-hardhat-config.json`
Default configurations of kairos network `1001`.

### 1. Hardhat configurations
Hardhat configuration variables can be found in `helper-hardhat-config.json` in the root directory. Below is the configuration explaination for `1001` network.

  * `name` - hardhat network name Ex: `kairos`
  * `witnetPriceRouter` - witnetPriceRouter Address Ex: `0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0` for Kaia Kairos Testnet. See [WitnetPriceRouter](https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses/kaia-price-feeds#kaia-kairos) for reference.
  * `witnetRandomness` - witnetRandomness Address. Ex: `0xb4b2e2e00e9d6e5490d55623e4f403ec84c6d33f` for Kaia Kairos Testnet. See [WitnetRandomness Contract Addresses](https://docs.witnet.io/smart-contracts/witnet-randomness-oracle/contract-addresses#kaia) for reference.
  
### 2. Environment Variables
We will need to set environment variables by following below steps 
1. copy `.env.example` file and rename to `.env`
2. Modify environment variables. Below is the explaination of each variable
  * `BAOBAB_RPC_URL` - `string` https://public-en.kairos.node.kaia.io can be used. its the rpc url of blockchain.
  * `PRIVATE_KEY` - `string` This is private key from wallet, ie [MetaMask](https://metamask.io/). This is required for deploying contracts to public networks. 

> IMPORTANT: MAKE SURE YOU DON'T EXPOSE THE KEYS YOU PUT IN THIS `.env` FILE saved in the package node_modules. By that, I mean don't push them to a public repo, and please try to keep them keys you use in development not associated with any real funds. 

Don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!

> Get some Baobab Testnet KLAY 
Go to the [Kaia faucets](https://kairos.wallet.kaia.io/faucet) to get some KLAY to configured private key account.

## Deploy contracts

You should now be all setup! You can run any method now! Since we configured the environment variables and hardhat configurations so you don't really need to pass any configurations.

To comple contracts
```
npx hardhat compile
```

To deploy all contracts
```
npx hardhat deploy --network baobab
```

To run tests
```
npm run test
```

## Interacting with Deployed Contracts

After deploying your contracts, the deployment output will give you the contract addresses as they are deployed.You can then use these contract addresses in conjunction with Hardhat tasks to perform operations on each contract.

### Witnet Price Feeds
The Witnet Price Feeds consumer contract has one task, to read the latest price of a specified price feed contract

```bash
  npx hardhat read-witnet-price-feed --contract <deployedContractAddress> --id <id> --network baobab
```

#### Parameters
`deployedContractAddress` - `string` Deployed WitnetPriceFeed contract address
`id` - `string` id is the witnet pricefeed ID. Ex: `0x6cc828d1` for Price-KLAY/USD-6. See [Kaia Witnet PriceFeeds](https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses/kaia-price-feeds#kaia-kairos) for reference.

#### Returns
  * `price` - price of KLAY/USD. 

#### Example
```typescript
  // 1 KLAY = 0.23 USD
  npx hardhat read-witnet-price-feed --contract 0x573AAAdF4Cf117586e74AE3845473fc65cd59C4c --id 0x6cc828d1 --network baobab

  /*
    Last price is:  237467
    Last timestamp is:  1678713345
  */
```

### Witnet Randomness
The Witnet Randomness has 4 tasks. 
Make sure the deployWitnetRandomNumber method successful execution.

> This 2-step process preserves unpredictability of the random numbers that you get because it guarantees that the number is derived from a seed that was generated only after the request was sent.

> **_NOTE:_**  Initially 1 and 2nd step has to be completed sequentially. Only after that 3rd or 4th can be executed for fetching a random number.

#### 1. Request new randomness
Requesting the new randomness.
Once the the request to new randomness is performed successfully. The other tasks can be performed after transaction submission.

```bash
  npx hardhat request-witnet-randomness --contract <deployedContractAddress> --value <value> --network baobab
```

#### Parameters
`deployedContractAddress` - `string` Deployed Deployed Witnet RandomNumber contract address
`value` - `number` Value for transaction cost when requesting random numbers. Ex: 500000000000000000 i.e, 0.5 KLAY

##### Returns
  * `transaction hash` - Transaction hash

##### Example
```typescript
  npx hardhat request-witnet-randomness --contract 0x8937C127F3060fF8a23E9a0fb5AEA10bc30e28be --value 500000000000000000 --network baobab
  /*
    Transaction Hash: 0x809addb235dc953c90a563c396c11978a359b574336564c7ec890514c961e050
  */
```

#### 2. Fetch Witnet random number
Initiate fetch witnet random number transaction.

> **WARNING**:
Calling `fetch-witnet-random-number` right after `request-witnet-randomness` will most likely cause the transaction to revert. Please allow 5-10 minutes for the randomization request to complete

```bash
  npx hardhat fetch-witnet-random-number --contract <deployedContractAddress> --network baobab
```

#### Parameters
`deployedContractAddress` - `string` Deployed Witnet RandomNumber contract address

##### Returns
  * `transaction hash` - Transaction hash

##### Example
```typescript
  npx hardhat fetch-witnet-random-number --contract 0x8937C127F3060fF8a23E9a0fb5AEA10bc30e28be --network baobab
  /*
    Transaction Hash: 0x0eb8fe1217ecdc3860009bc49f5319cab6ffdedd80877c39df02899a3542db24'
  */
```

#### 3. Get the latest randomizing block
```bash
  npx hardhat read-latest-randomizing-block --contract <deployedContractAddress> --network baobab
```

#### Parameters
`deployedContractAddress` - `string` Deployed Witnet RandomNumber contract address

##### Returns
  * `randomizingBlock` - randomized block value

##### Example
```typescript
  npx hardhat read-latest-randomizing-block --contract 0x8937C127F3060fF8a23E9a0fb5AEA10bc30e28be --network baobab
  /*
    The latest randomizing block is: 113690138
  */
```

#### 4. Get the generated random number
fetches the generated random number

> **_NOTE:_** Make sure first 2 steps are executed sequentially.

```bash
  npx hardhat read-witnet-random-number --contract <deployedContractAddress> --network baobab
```

#### Parameters
`deployedContractAddress` - `string` Deployed Witnet RandomNumber contract address

##### Returns
  * `randomNumber` - generated random number

##### Example
```typescript
  npx hardhat read-witnet-random-number --contract 0x8937C127F3060fF8a23E9a0fb5AEA10bc30e28be --network baobab
  /*
    Random Number is: 1392104028
  */
```

### Witnet Web Oracle Request
We have 2 examples for Witnet HTTP Request:
- KlayPrice: a GET request example to get Klay token price in USD
- postRequestExample: a POST request example echoes back any data and headers that you send in your POST requests (based on this [tutorial](https://docs.witnet.io/smart-contracts/witnet-web-oracle/make-a-post-request))

Inside `witnet-queries` folder you will find predefined Witnet oracle queries.

You can follow this [link](https://docs.witnet.io/smart-contracts/witnet-web-oracle/make-a-get-request) to learn how to create other queries.

#### Compile the Witnet queries into Solidity contracts
```
npx rad2sol --target ./witnet-queries --write-contracts ./contracts/witnet-requests
```

##### Example
```
  npx rad2sol --target ./witnet-queries --write-contracts ./contracts/witnet-requests
```

#### Execute Witnet Queries
After the contracts have been created, you can query locally to preview the result by running:
```
npx witnet-toolkit try-query --from-solidity ./contracts/witnet-requests/<contractFileName>
```

##### Parameters
`contractFileName` - `string` generatedSolFileName

##### Returns
  * `Result` - `string`

##### Example 1 - Fetch Coinprice
```typescript
  // 1 KLAY = 0.19 USD. Divide the return value by 10^6 to get actual coin price result.
  npx witnet-toolkit try-query --from-solidity ./contracts/witnet-requests/coinPrice.sol
  /*
    Result: 195467
  */
```

##### Example 2 - Post Request
```typescript
  // Gets parsed data of headers.Header-Name from the post api 
  npx witnet-toolkit try-query --from-solidity ./contracts/witnet-requests/postAPI.sol
  /*
    Result: "Header-Value"
  */
```

> **_NOTE:_**  If above tryWitnetQueries is stuck, please try to run command shown in below snapshot `npx witnet-toolkit`, install the binary once in the machine and retry above method
![WitnetToolkitBinary](https://github.com/kaiachain/kaia-service-sdk/blob/main/packages/oracles-starter-kit/WitnetToolkitBinary.png)

### Supra Price Feeds
The Supra Price Feeds consumer contract has one task, to read the latest price of a specified price feed contract

```bash
  npx hardhat read-supra-price-feed --contract <deployedContractAddress> --network baobab
```
#### Parameters
`deployedContractAddress` - `string` Deployed SupraValueFeedExample contract address
`marketpair` - `string` marketpair is the Supra marketpair id. Ex: `btc_usdt`. See [Kaia Supra PriceFeeds](https://supraoracles.com/docs/get-started/market-pairs#kaia-chain) for reference.


#### Returns
  * `price` - price of BTC/USD. 

#### Example
```typescript
  // 1 BTC = 28837.54156500 USD
  npx hardhat read-supra-price-feed --contract 0x80d2d67802942e9060122fafdf62bdc747d09021 --marketpair btc_usdt --network baobab
```
## Resources

- [Witnet Documentation](https://docs.witnet.io/)
- [Hardhat Documentation](https://hardhat.org/getting-started/)


