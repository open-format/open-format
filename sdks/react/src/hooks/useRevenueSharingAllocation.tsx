import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useRevenueSharingAllocation() {
  const { sdk } = useOpenFormat();

  const { mutateAsync: allocate, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.setupRevenueSharing>>,
    unknown,
    Parameters<typeof sdk.allocateRevenueShares>[0]
  >(params => {
    return sdk.allocateRevenueShares(params);
  });

  return {
    ...mutation,
    allocate,
  };
}
