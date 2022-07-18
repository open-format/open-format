import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useSetupRevenueSharing() {
  const { sdk } = useOpenFormat();

  const { mutateAsync: setup, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.setupRevenueSharing>>,
    unknown,
    Parameters<typeof sdk.setupRevenueSharing>[0]
  >(params => {
    return sdk.setupRevenueSharing(params);
  });

  return {
    ...mutation,
    setup,
  };
}
