# Open Format React

Open Format React is an even easier way to integrate with the [Open Format SDK](https://github.com/simpleweb/open-format/tree/main/sdks/open-format) using React.

## Installation

You can install the SDK with NPM or Yarn.

```shell
npm install @simpleweb/open-format-react ethers
```

```shell
yarn add @simpleweb/open-format-react ethers
```

## Documentation

@TODO: Add link to documentation when it exists

You can [checkout an example Next.js to see how it works](https://github.com/simpleweb/open-format/tree/main/examples/react-next).

## Getting started

Start by adding the `OpenFormatProvider` around your app.

```tsx
import { OpenFormatProvider } from '@simpleweb/open-format-react';

function App() {
  return (
    <>
      <OpenFormatProvider>{/* the rest of your app... */}</OpenFormatProvider>
    </>
  );
}
```

### Reading from the subgraph

There are numerous hooks that you can use to pull data from the subgraph. These return a `Query` from `react-query`, please refer to [their documentation](https://react-query.tanstack.com/guides/queries) for further information.

```tsx
import { useSaleData } from '@simpleweb/open-format-react';

function MyComponent() {
  const { data } = useSaleData({ tokenId: '0x...' });

  return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>;
}
```

Or you can make raw requests against the subgraph.

```tsx
import { useRawRequest } from '@simpleweb/open-format-react';
import { gql } from 'graphql-request';

function MyComponent() {
  const { data } = useRawRequest({
    query: gql`
      {
        tokens {
          id
        }
      }
    `,
  });

  return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>;
}
```

#### Request Configuration

[react-query](https://react-query.tanstack.com) is being used under the hood to make the request, and it is possible to pass through configuration options.

```tsx
const { data } = useRawRequest({
  query: gql`
    {
      tokens {
        id
      }
    }
  `,
  config: {...}
});
```

### Connecting to a wallet

Before you can deploy or perform any interactions with the contract you'll want to connect a wallet.

You can allow people to connect their wallets using the `<ConnectButton />` component (which uses [Onboard](https://www.blocknative.com/onboard)) and the `useWallet` hook to get the connection state and the wallet itself if required.

```tsx
import { ConnectButton, useWallet } from '@simpleweb/open-format-react';

function MyComponent() {
  const { isConnected, wallet } = useWallet();

  return (
    <>
      <ConnectButton />
    </>
  );
}
```

### Deploying a contract

Deploying a contract is simple, you just need to make sure a wallet is connected first.

```tsx
import { useDeploy, useWallet } from '@simpleweb/open-format-react';

function MyComponent() {
  const { isConnected } = useWallet();
  const { deploy } = useDeploy();

  return (
    <>
      {isConnected && (
        <button
          onClick={() =>
            deploy({
              maxSupply: 100,
              mintingPrice: 0.01,
              name: 'Test',
              symbol: 'TEST',
              url: 'ipfs://',
            })
          }
        >
          Deploy NFT
        </button>
      )}
    </>
  );
}
```

### Minting an NFT

Once you have deployed a contract you can then mint NFTs from it. The `contractAddress` can be accessed when deploying a contract `const { contractAddress } = await deploy()`.

```tsx
import { useMint, useNFT } from '@simpleweb/open-format-react';

function MyComponent() {
  const nft = useNFT('0x...');
  const { mint } = useMint(nft);

  return (
    <>
      <button onClick={() => mint()}>Mint NFT</button>
    </>
  );
}
```
