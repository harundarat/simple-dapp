// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract Chit {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChit(
        string calldata name,
        string calldata message
    ) external payable {
        require(msg.value > 0, "Chit: value must be greater than 0");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
