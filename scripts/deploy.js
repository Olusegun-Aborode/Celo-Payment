const hre = require("hardhat");

async function main() {
    const PaymentProcessor = await hre.ethers.getContractFactory("PaymentProcessor");
    const paymentProcessor = await PaymentProcessor.deploy();
  
    await paymentProcessor.deployed();
  
    console.log("PaymentProcessor deployed to:", paymentProcessor.address);
}
  
main()
.catch((error)

 => {
    console.error(error);
    process.exit(1);
});
