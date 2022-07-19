import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useSetSecondaryCommissionPercentage() {
  const { sdk } = useOpenFormat();

  const {
    mutateAsync: setSecondaryCommissionPercentage,
    ...mutation
  } = useMutation<
    Awaited<ReturnType<typeof sdk.setSecondaryCommissionPercent>>,
    unknown,
    Parameters<typeof sdk.setSecondaryCommissionPercent>[0]
  >(percent => {
    return sdk.setSecondaryCommissionPercent(percent);
  });

  return {
    ...mutation,
    setSecondaryCommissionPercentage,
  };
}
