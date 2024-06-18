// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "witnet-solidity-bridge/contracts/interfaces/IWitnetPriceRouter.sol";

contract WitnetPriceFeed {
    IWitnetPriceRouter public immutable witnetPriceRouter;

    /*
     * Network: Kaia Kairos
     * WitnetPriceRouter: 0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0
     **/
    constructor(IWitnetPriceRouter _router) {
        witnetPriceRouter = _router;
    }

    /*
    * @param _id4 - pricefeed id. 
    * id4 can be found here https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses/kaia-price-feeds
    * 
    **/
    function getPrice(bytes4 _id4) public view returns (int256 _lastPrice, uint256 _lastTimestamp) {
        (_lastPrice, _lastTimestamp,) = witnetPriceRouter.valueFor(_id4);
    }
}