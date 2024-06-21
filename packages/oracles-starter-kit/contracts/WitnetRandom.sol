// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "witnet-solidity-bridge/contracts/interfaces/IWitnetRandomness.sol";

contract WitnetRandom {
    uint32 public randomness;
    uint256 public latestRandomizingBlock;
    IWitnetRandomness public immutable witnetRandomness;

    /*
     * Network: Kaia Kairos
     * WitnetRandomness: 0xb4b2e2e00e9d6e5490d55623e4f403ec84c6d33f
     **/
    constructor(IWitnetRandomness _witnetRandomness) {
        assert(address(_witnetRandomness) != address(0));
        witnetRandomness = _witnetRandomness;
    }

    receive() external payable {}

    function requestRandomness() external payable {
        latestRandomizingBlock = block.number;
        uint _usedFunds = witnetRandomness.randomize{ value: msg.value }();
        if (_usedFunds < msg.value) {
            payable(msg.sender).transfer(msg.value - _usedFunds);
        }
    }

    function fetchRandomNumber() external {
        assert(latestRandomizingBlock > 0);
        randomness =  witnetRandomness.random(type(uint32).max, 0, latestRandomizingBlock);
    }
}