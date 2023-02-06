// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * @title The PriceConsumerV3 contract
 * @notice Acontract that returns latest price from Chainlink Price Feeds
 */
contract PriceConsumerV3 {
    

    /**
     * @notice Executes once when a contract is created to initialize state variables
     *
     * @param _priceFeed - Price Feed Address. Refer here https://docs.chain.link/data-feeds/price-feeds/addresses/?network=klaytn
     *
     * Network: Baobab
     * Aggregator: LINK/KLAY
     * Address: 0xf49f81b3d2F2a79b706621FA2D5934136352140c
     */
    constructor(address _priceFeed) {
        
    }

    /**
     * @notice Changes price feed address
     * 
     * @param _priceFeed - Price Feed Address. Refer here https://docs.chain.link/data-feeds/price-feeds/addresses/?network=klaytn
     *
     * 
     */
    function changePriceFeed(address _priceFeed) public {
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    /**
     * @notice Returns the latest price
     *
     * @return latest price
     */
    function getLatestPrice(address _priceFeed) public view returns (int256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(_priceFeed);
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}
