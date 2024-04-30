import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      chainId: 80002,
      accounts: [vars.get("PRIVATE_KEY")],
    },
    arbsepolia: {
      url: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
      chainId: 421614,
      accounts: [vars.get("PRIVATE_KEY")],
    },
    sepolia: {
      url: "https://1rpc.io/sepolia",
      chainId: 11155111,
      accounts: [vars.get("PRIVATE_KEY")],
    },
  },
  etherscan: {
    apiKey: {
      amoy: vars.get("AMOY_API_KEY"),
      arbsepolia: vars.get("ARBSEPOLIA_API_KEY"),
      sepolia: vars.get("SEPOLIA_API_KEY"),
    },
    customChains: [
      {
        network: "amoy",
        chainId: 80002,
        urls: {
          browserURL: "https://amoy.polygonscan.com/",
          apiURL: "https://api.polygonscan.com/api",
        }
      },
      {
        network: "arbsepolia",
        chainId: 421614,
        urls: {
          browserURL: "https://sepolia.arbiscan.io/",
          apiURL: "https://api.arbiscan.io/api",
        },
      }
    ]
  },
};

export default config;
