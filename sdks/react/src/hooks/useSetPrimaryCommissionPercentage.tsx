import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useSetPrimaryCommissionPercentage() {
  const { sdk } = useOpenFormat();

  const { mutateAsync: setPrimaryCommissionPercent, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.setPrimaryCommissionPercent>>,
    unknown,
    Parameters<typeof sdk.setPrimaryCommissionPercent>[0]
  >(percent => {
    return sdk.setPrimaryCommissionPercent(percent);
  });

  return {
    ...mutation,
    setPrimaryCommissionPercent,
  };
}
