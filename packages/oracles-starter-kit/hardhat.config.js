require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-deploy')
require('./tasks')
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  'https://klaytn.blockpi.network/v1/rpc/public'
const BAOBAB_RPC_URL =
  process.env.BAOBAB_RPC_URL || 'https://public-en.kairos.node.kaia.io'
const PRIVATE_KEY = process.env.PRIVATE_KEY
const FORKING_BLOCK_NUMBER = process.env.FORKING_BLOCK_NUMBER

module.exports = {
  defaultNetwork: 'baobab',
  networks: {
    hardhat: {
      hardfork: 'merge',
      // If you want to do some forking set `enabled` to true
      forking: {
        url: MAINNET_RPC_URL,
        blockNumber: FORKING_BLOCK_NUMBER,
        enabled: false
      },
      chainId: 31337
    },
    localhost: {
      chainId: 31337
    },
    baobab: {
      url: BAOBAB_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 1001
    }
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0 // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.7'
      },
      {
        version: '0.6.6'
      },
      {
        version: '0.4.24'
      }
    ]
  },
  mocha: {
    timeout: 200000 // 200 seconds max for running tests
  }
}
