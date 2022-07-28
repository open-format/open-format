import { useConnectWallet } from '@web3-onboard/react';

/**
 * Hook to get the wallet state
 *
 * @example
 * ```tsx
 * const { isConnected, wallet } = useWallet();
 * ```
 */
export function useWallet() {
  const [{ wallet }] = useConnectWallet();

  const isConnected = !!wallet;

  return {
    isConnected,
    wallet,
  };
}
