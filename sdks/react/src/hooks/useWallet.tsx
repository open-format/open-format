import { useAccount } from 'wagmi';

/**
 * Hook to get the wallet state
 *
 * @example
 * ```tsx
 * const { isConnected, wallet } = useWallet();
 * ```
 */
export function useWallet() {
  const account = useAccount();

  return {
    ...account,
  };
}
