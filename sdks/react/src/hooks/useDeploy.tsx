import { useMutation } from 'react-query';
import { Transaction } from 'ethers';
import { useOpenFormat } from '../provider';

/**
 * Gets the deploy function from the sdk
 * @param {Transaction} [transactionArgs]
 * @returns deploy function
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
