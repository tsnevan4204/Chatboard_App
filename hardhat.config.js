require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// const { SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/kls8f86lGR1T0YeE-_mGfYiYMcfgKzik",
      accounts: ["5f49b9f8c758b463b5e1bfc1ee366a7c2f25fc045b552229cdc509e47f9d2ca5"],
    },
  }
};