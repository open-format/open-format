# Open Format SDK

The Open Format SDK provides a simple way to interact with the [Open Format platform](https://openformat.simpleweb.co.uk/), an easy way to build build your own NFT ecosystem.

## Installation

You can install the SDK with NPM or Yarn.

```shell
npm install @simpleweb/open-format ethers
```

```shell
yarn add @simpleweb/open-format ethers
```

## Documentation

[Read the Open Format documentation](https://docs.openformat.simpleweb.co.uk/) in full or you can get started quickly below.

## Getting started

### Deploying an NFT

To do this you'll want to create an instance of the SDK with a `signer`. This can be done by passing a private key...

```tsx
import { OpenFormatSDK } from '@simpleweb/open-format';

const sdk = new OpenFormatSDK({
  network: 'mumbai',
  signer: '0x...',
});
```

...or with a `Signer` instance, which you'd typically get from a connected wallet (but explicitly created in this example). Note that the `signer` must be on the same network.

```tsx
import { OpenFormatSDK } from '@simpleweb/open-format';

const signer = new ethers.Wallet(
  '0x...',
  new ethers.providers.JsonRpcProvider(
    'https://matic-mumbai.chainstacklabs.com/'
  )
);

const sdk = new OpenFormatSDK({
  network: 'mumbai',
  signer,
});
```

Now can now deploy your NFT.

```tsx
await sdk.deploy({
  maxSupply: 100,
  mintingPrice: 0.01,
  name: 'Test 1',
  symbol: 'TEST1',
  url: 'ipfs://',
});
```

### Reading from the subgraph

To read information from the sub graph you can create a read-only instance of the SDK.

```tsx
import { OpenFormatSDK } from '@simpleweb/open-format';

const sdk = new OpenFormatSDK();
```

By default it will use your local network (http://localhost:8545) so you'll usually want to specify which network you want to interact with.

```tsx
const sdk = new OpenFormatSDK({
  network: 'mumbai',
});
```

To pull back data, simply use any of the pre-built methods.

```tsx
await sdk.getSaleDataForToken('0x...');
```

Or if you want pull back specific data, you can pass through your own GraphQL query. Explore what's possible in the [Open Format playground](https://api.thegraph.com/subgraphs/name/simpleweb/open-format/graphql).

```tsx
import { gql } from 'graphql-request';

const query = gql`
  {
    tokens {
      id
    }
  }
`;

await sdk.rawRequest(query);
```
