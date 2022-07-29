import { useMutation } from '@tanstack/react-query';
import { Transaction } from 'ethers';
import { useOpenFormat } from '../provider';

/**
 * Hook to get the deploy function from the SDK
 *
 * @example
 * ```tsx
 * const { ...mutation, deploy } = useDeploy();
 * ```
 */
export function useDeploy(transactionArgs?: Transaction) {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.deploy>>,
    unknown,
    Parameters<typeof sdk.deploy>[0]
  >(data => {
    return sdk.deploy(data, transactionArgs);
  });

  return {
    ...mutation,
    deploy: mutateAsync,
  };
}
