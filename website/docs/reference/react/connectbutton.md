# ConnectButton

Rather than manually providing a signer during initialisation of the SDK you can use the `<ConnectButton/>` component which will allow users to connect their wallet's to something like Metamask.

```tsx
import { ConnectButton } from '@simpleweb/open-format-react';

function MyComponent() {
  return (
    <>
      <ConnectButton />
    </>
  );
}
```

Behind the scenes, this is just a regular `<button>` element and will inherit any of the attributes you want to apply to it.

You can style it in anyway you wish including `styled-components`.

```tsx
const StyledConnectButton = styled(ConnectButton);
```
