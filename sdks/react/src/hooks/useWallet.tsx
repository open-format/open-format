import { useConnectWallet } from '@web3-onboard/react';

/**
 * Gets the wallet state
 * @returns
 */
export function useWallet() {
  const [{ wallet }] = useConnectWallet();

  const isConnected = !!wallet;

  return {
    isConnected,
    wallet,
  };
}
