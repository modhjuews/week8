require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
       accounts: ["0x6233e5c6b14c5919d4a6bccaf4b367d171e3264836ab77511f4d0d96fe941788"]
    }
  }

};
