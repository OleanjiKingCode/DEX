require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
  },
}