# React

The React SDK adds a small abstraction over the [Javascript SDK](../javascript/) but this simplifies interacting with Open Format even further.

## Installation

You can install the SDK with NPM or Yarn.

```bash
npm install @simpleweb/open-format-react ethers
```

```bash
yarn add @simpleweb/open-format-react ethers
```

## Quick start

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

There are numerous hooks that you can use to pull data from the subgraph. These return a `Query` from `react-query`, please refer to [their documentation](https://tanstack.com/query/v4/docs/guides/queries) for further information.

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
import { useMint } from '@simpleweb/open-format-react';

function MyComponent() {
  const { mint } = useMint();

  return (
    <>
      <button onClick={() => mint({ contractAddress: '0x...' })}>
        Mint NFT
      </button>
    </>
  );
}
```
