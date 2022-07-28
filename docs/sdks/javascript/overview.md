---
order: 1
title: Javascript SDK
---

# Javascript SDK

​The Open Format JavaScript SDK provides a simple way to interact with Open Format.

Don't forget to checkout our [React SDK](/sdk/react/overview) which simplifies using the SDK even further.

## Installation

You can install the SDK with NPM or Yarn.

```bash
npm  install @simpleweb/open-format ethers
```

```bash
yarn  add @simpleweb/open-format ethers
```

## Quick start

### Initialising the SDK

You can initialise the SDK by creating a new instance of `OpenFormatSDK` and selecting one of the available networks that are supported. This will create a new instance in "read-only" mode, meaning you can read from the subgraph but any interactions that require you to sign a transaction (deploying a new instance of the contract, minting an NFT, etc...) will throw an error.

```tsx
import  { OpenFormatSDK }  from  '@simpleweb/open-format';

const sdk =  new  OpenFormatSDK({
  network:  'mumbai',
});
```

If you wish to do more than just interact with the subgraph, you will have to provide a `signer` when initialising the SDK.

The easiest way to do this is by passing your wallet's private key as the `signer`. You'd typically do this only from a Node.js context as to not expose your private key to the world.

```tsx
import  { OpenFormatSDK }  from  '@simpleweb/open-format';

const sdk =  new  OpenFormatSDK({
  network:  'mumbai',
  signer:  '0x...',
});
```

Instead of passing a private key, you can also pass a `signer` instance when initialising the SDK. You'd generally get an instance of a `signer` by having the user connect their wallet but in this contrived example we are manually creating a `signer` with the `ethers` library.

```tsx
import  { OpenFormatSDK }  from  '@simpleweb/open-format';
import  { ethers }  from  "ethers";

const signer =  new  ethers.Wallet(
  '0x...',
  new  ethers.providers.JsonRpcProvider(
  'https://matic-mumbai.chainstacklabs.com/'
  )
);

const sdk =  new  OpenFormatSDK({
  network:  'mumbai',
  signer,
});
```

Note that the `signer` and the SDK must be configured to use the same network.

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

Copied!

###

​
