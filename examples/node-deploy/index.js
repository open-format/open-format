import { OpenFormatSDK } from "@simpleweb/open-format";
import { ethers } from "ethers";

const sdk = new OpenFormatSDK({
  network: "mumbai",
  signer: "YOUR_PRIVATE_KEY"
});

console.log("Deploying...");

const { transactionHash } = await sdk.deploy(
  {
    maxSupply: 100,
    mintingPrice: 0.01,
    name: "Test 1",
    symbol: "TEST1",
    url: "ipfs://"
  }
  // @dev uncomment to pass through transaction arguments.
  // https://docs.ethers.io/v5/api/utils/transactions/#Transaction
  // {
  //   maxFeePerGas: ethers.BigNumber.from(60e9),
  //   maxPriorityFeePerGas: ethers.BigNumber.from(60e9)
  // }
);

console.log(
  `View on Polygonscan: https://mumbai.polygonscan.com/tx/${transactionHash}`
);
console.log("Complete!");
