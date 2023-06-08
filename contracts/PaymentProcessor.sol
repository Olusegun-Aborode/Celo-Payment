//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentProcessor {
    address public admin;
    mapping(address => uint256) public balances;

    constructor(address _admin) {
        admin = _admin;
    }

    function pay() external payable {
        require(msg.value > 0, "Payment must be positive");
        balances[msg.sender] += msg.value;
        emit PaymentDone(msg.sender, msg.value);
    }

    event PaymentDone(address payer, uint256 amount);
}
