import React, { createContext, useContext, useRef } from 'react';
import { OpenFormatSDK } from '@simpleweb/open-format';

const OpenFormatContext = createContext<{ sdk: OpenFormatSDK } | undefined>(
  undefined
);

export function OpenFormatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const sdk = useRef(new OpenFormatSDK({ network: 'mumbai' }));

  return (
    <OpenFormatContext.Provider value={{ sdk: sdk.current }}>
      {children}
    </OpenFormatContext.Provider>
  );
}

export function useOpenFormat() {
  const context = useContext(OpenFormatContext);

  if (typeof context === 'undefined') {
    throw new Error('<OpenFormatProvider> is not wrapping your app');
  }

  return context;
}
