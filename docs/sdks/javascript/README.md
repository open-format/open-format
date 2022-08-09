# Javascript

The Open Format JavaScript SDK provides a simple way to interact with Open Format.

Don't forget to checkout our [React SDK](../react/) which simplifies using the SDK even further.

## Installation

You can install the SDK with NPM or Yarn.

```bash
npm install @simpleweb/open-format ethers
```

```bash
yarn add @simpleweb/open-format ethers
```

## Quick start

### Initialising the SDK

You can initialise the SDK by creating a new instance of `OpenFormatSDK` and selecting one of the available networks that are supported. This will create a new instance in "read-only" mode, meaning you can read from the subgraph but any interactions that require you to sign a transaction (deploying a new instance of the contract, minting an NFT, etc...) will throw an error.

```tsx
import { OpenFormatSDK } from '@simpleweb/open-format';

const sdk = new OpenFormatSDK({
  network: 'mumbai',
});
```

If you wish to do more than just interact with the subgraph, you will have to provide a `signer` when initialising the SDK.

The easiest way to do this is by passing your wallet's private key as the `signer`. You'd typically do this only from a Node.js context as to not expose your private key to the world.

```tsx
import { OpenFormatSDK } from '@simpleweb/open-format';

const sdk = new OpenFormatSDK({
  network: 'mumbai',
  signer: '0x...',
});
```

Instead of passing a private key, you can also pass a `signer` instance when initialising the SDK. You'd generally get an instance of a `signer` by having the user connect their wallet but in this contrived example we are manually creating a `signer` with the `ethers` library.

```tsx
import { OpenFormatSDK } from '@simpleweb/open-format';
import { ethers } from "ethers";

const signer = new ethers.Wallet(
  '0x...',
  new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com/')
);

const sdk = new OpenFormatSDK({
  network: 'mumbai',
  signer,
});
```

Note that the `signer` and the SDK must be configured to use the same network.

**What is a signer?**

Simply put a signer is just the account that manages transactions, more information on this can be found [here](https://docs.ethers.io/v5/api/signer/).

**Networks**

Networks are different Ethereum environments you can access for a variety of use cases.

The network used in the example above (mumbai) is one of the _**Polygon**_ testnet networks where we can be used as a sandbox to test actions on the chain before deploying to mainnet (where real asset transactions occur).

More information on networks can be found [here](https://ethereum.org/en/developers/docs/networks/).

**Polygon**

Polygon is a side-chain built alongside its parent chain, in our case ethereum. It has specific benefits such as enhanced speed and reduced cost. More information on polygon can be found [here.](https://docs.polygon.technology/)

**The subgraph**

Querying data from projects that have high complexity (such as NFT's) is made easy using the subgraph which leverages a GraphQL endpoint to query data. Our subgraph is setup to query data about any NFT created with the Open Format protocol.

More information on the graph can be found in the documentation [here.](https://thegraph.com/docs/en/about/)

**ERC721 standard**

ERC721 is a more complex standard than ERC20, with multiple optional extensions, and is split across a number of contracts. Check out the [API Reference](https://docs.openzeppelin.com/contracts/3.x/api/token/ERC721) to learn more about these.

### Deploying an NFT

If you are just starting out, you'll typically want to deploy a version of the contract so you can start interacting with it. To do this, call the `deploy` method with the options you'd like.

```tsx
await sdk.deploy({
  maxSupply: 100,
  mintingPrice: 0.01,
  name: 'Test 1',
  symbol: 'TEST1',
  url: 'ipfs://',
});
```
