const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");
// import {TOKEN_CONTRACT_ADDRESS} from "./constants"

async function main() {
  const cryptoDevTokenAddress = "0xbF5E98e3Fa6668e6Fc56C312c9b1E256227E765D" ;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
  const exchangeContract = await ethers.getContractFactory("Exchange");

  // here we deploy the contract
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptoDevTokenAddress
  );
  await deployedExchangeContract.deployed();

  // print the address of the deployed contract
  console.log("Exchange Contract Address:", deployedExchangeContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });