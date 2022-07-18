import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useSetSecondaryCommissionPercentage() {
  const { sdk } = useOpenFormat();

  const {
    mutateAsync: setSecondaryCommissionPercentage,
    ...mutation
  } = useMutation<
    Awaited<ReturnType<typeof sdk.setSecondaryCommissionPercentage>>,
    unknown,
    Parameters<typeof sdk.setSecondaryCommissionPercentage>[0]
  >(percent => {
    return sdk.setSecondaryCommissionPercentage(percent);
  });

  return {
    ...mutation,
    setSecondaryCommissionPercentage,
  };
}
