const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PaymentProcessor", function () {
  it("Should receive and record payments", async function () {
    const PaymentProcessor = await ethers.getContractFactory("PaymentProcessor");
    const paymentProcessor = await PaymentProcessor.deploy();
    await paymentProcessor.deployed();

    await paymentProcessor.pay({value: ethers.utils.parseEther("1.0")});

    expect(await paymentProcessor.balances(owner.address)).to.equal(ethers.utils.parseEther("1.0"));
  });
});
