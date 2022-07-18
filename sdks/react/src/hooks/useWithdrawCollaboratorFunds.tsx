import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useWithdrawCollaboratorFunds() {
  const { sdk } = useOpenFormat();

  const { mutateAsync: withdraw, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.withdrawCollaboratorFunds>>,
    unknown,
    Parameters<typeof sdk.withdrawCollaboratorFunds>[0]
  >(params => {
    return sdk.withdrawCollaboratorFunds(params);
  });

  return {
    ...mutation,
    withdraw,
  };
}
