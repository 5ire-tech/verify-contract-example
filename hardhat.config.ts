import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    thunder: {
      url: 'https://rpc.testnet.5ire.network',
      chainId: 997,
      accounts: ['your private key']
    },
    mainnet: {
      url: 'https://rpc.5ire.network',
      chainId: 995,
      accounts: ['your private key']
    },
  },
  etherscan: {
    apiKey: {
      thunder: "<your etherscan api",
      mainnet: "<your etherscan api",

    },
    customChains: [
      {
        network: "thunder",
        chainId: 997,
        urls: {
          apiURL: "https://contract.evm.testnet.5ire.network/5ire/verify",
          browserURL: "https://testnet.5irescan.io",
        },
      },
      {
        network: "mainnet",
        chainId: 995,
        urls: {
          apiURL: "https://contract.evm.scan.5ire.network/5ire/verify",
          browserURL: "https://5irescan.io",
        },
      },
    ],
  },
};

export default config;
