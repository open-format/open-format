# OpenFormatProvider

The `<OpenFormatProvider>` is how you initialise the SDK. It should typically wrap your entire application so you can access the various hooks it provides.

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

As the provider takes care of initialising the SDK for you, you don't have to do much else but you can optionally pass it a `config` object if you want to specify which network you want to interact with.

The `config` object can be passed through as a `config` prop to the provider.

```tsx
function App() {
  return (
    <>
      <OpenFormatProvider config={{ network: 'mumbai' }}>
        {/* the rest of your app... */}
      </OpenFormatProvider>
    </>
  );
}
```

| Parameter | Type  | Description                        |
| --------- | ----- | ---------------------------------- |
| network   | chain | "mainnet", "mumbai" or "localhost" |
