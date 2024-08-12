const hre= require('hardhat');
const ethers = require("@nomicfoundation/hardhat-ethers");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const Lock = await hre.ethers.getContractFactory('Storage');
  const lock = await Lock.deploy();
  await lock.waitForDeployment();

  // Get and print the contract address
  const myContractDeployedAddress = await lock.getAddress();
  console.log(`Deployed to ${myContractDeployedAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});