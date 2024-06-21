const { assert } = require('chai')
const { network, waffle } = require('hardhat')
const { developmentChains } = require('../../helper-hardhat-config')
const { deployMockContract, provider } = waffle

!developmentChains.includes(network.name)
  ? describe.skip
  : describe('Unit Tests - WitnetPriceFeed', async function () {
    // Price Feed Address, values can be obtained at https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses/kaia-price-feeds
    let witnetPriceFeed

    beforeEach(async () => {
      const [deployerOfContract] = provider.getWallets()
      // deploy the contract to Mock
      const WitnetPriceFeedABI = require('../../artifacts/contracts/WitnetPriceFeed.sol/WitnetPriceFeed.json')
      witnetPriceFeed = await deployMockContract(deployerOfContract, WitnetPriceFeedABI.abi)
    })

    describe('getPrice', () => {
      it('should return the same value as the mock', async () => {
        await witnetPriceFeed.mock.getPrice.withArgs('0x6cc828d1').returns(10, 10)
        const priceConsumerResult = (await witnetPriceFeed.getPrice('0x6cc828d1')).toString()
        console.log(priceConsumerResult)
        assert.equal(priceConsumerResult.toString(), '10,10')
      })
    })
  })