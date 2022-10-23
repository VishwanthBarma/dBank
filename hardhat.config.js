/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: "0.8.17",
};
