import { OpenFormatSDK } from "@simpleweb/open-format";

const sdk = new OpenFormatSDK({
  network: "mumbai",
  signer: "YOUR_PRIVATE_KEY"
});

console.log("Deploying...");

const { contractAddress } = await sdk.deploy({
  maxSupply: 100,
  mintingPrice: 0.01,
  name: "Test 1",
  symbol: "TEST1",
  url: "ipfs://"
});

console.log(`Deployed: ${contractAddress}`);

console.log("Minting...");

const receipt = await sdk.mint({ contractAddress });

console.log(receipt);
