import React, { createContext, useContext, useRef } from 'react';
import { OpenFormatSDK } from '@simpleweb/open-format';
import { QueryClient, QueryClientProvider } from 'react-query';
import './onboard';

const OpenFormatContext = createContext<{ sdk: OpenFormatSDK } | undefined>(
  undefined
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

/**
 * The Provider for the Open Format SDK
 */
export function OpenFormatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const sdk = useRef(new OpenFormatSDK({ network: 'mumbai' }));

  return (
    <OpenFormatContext.Provider value={{ sdk: sdk.current }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </OpenFormatContext.Provider>
  );
}

/**
 * Gets the Open Format Context
 * @returns the open format context
 * @private
 */
export function useOpenFormat() {
  const context = useContext(OpenFormatContext);

  if (typeof context === 'undefined') {
    throw new Error('<OpenFormatProvider> is not wrapping your app');
  }

  return context;
}
