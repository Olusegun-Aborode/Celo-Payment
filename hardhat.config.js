module.exports = {
  solidity: "0.8.0",
  networks: {
    celo: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [process.env.CELO_PRIVATE_KEY]
    },
  },
};
