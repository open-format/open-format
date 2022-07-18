import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useWithdrawTokenFunds() {
  const { sdk } = useOpenFormat();

  const { mutateAsync: withdraw, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.withdrawTokenFunds>>,
    unknown,
    Parameters<typeof sdk.withdrawTokenFunds>[0]
  >(params => {
    return sdk.withdrawTokenFunds(params);
  });

  return {
    ...mutation,
    withdraw,
  };
}
