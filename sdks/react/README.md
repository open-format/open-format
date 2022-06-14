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
