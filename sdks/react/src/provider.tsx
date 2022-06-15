import { Chain, OpenFormatSDK } from '@simpleweb/open-format';
import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import { ethers } from 'ethers';
import React, { createContext, useContext, useEffect, useRef } from 'react';
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
  config = {
    network: 'localhost',
  },
}: {
  children: React.ReactNode;
  config?: {
    network: Chain;
  };
}) {
  const sdk = useRef(new OpenFormatSDK({ network: config.network }));

  const [{ wallet }] = useConnectWallet();
  const [{ connectedChain }] = useSetChain();

  useEffect(() => {
    if (wallet) {
      sdk.current.signer = new ethers.providers.Web3Provider(
        wallet.provider
      ).getSigner();
    } else {
      sdk.current.signer = undefined;
    }
  }, [wallet]);

  useEffect(() => {
    if (connectedChain) {
      // @TODO switch chain if incorrect
    }
  }, [connectedChain]);

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
