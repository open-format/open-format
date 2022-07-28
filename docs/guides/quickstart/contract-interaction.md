# Contract Interaction

Once your contract is deployed, you can then easily interact with it through the SDK. Here's an example of minting a token.

{% code title="mint.js" %}
```javascript
import { OpenFormatSDK } from "@simpleweb/open-format";

const sdk = new OpenFormatSDK({
  network: "mumbai",
  signer: "0x..."
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

```
{% endcode %}
