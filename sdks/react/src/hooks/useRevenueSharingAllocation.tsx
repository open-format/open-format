import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useRevenueSharingAllocation(nft: OpenFormatNFT) {
  const { mutateAsync: allocate, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.allocateRevenueShares>>,
    unknown,
    Parameters<typeof nft.allocateRevenueShares>[0]
  >(params => {
    return nft.allocateRevenueShares(params);
  });

  return {
    ...mutation,
    allocate,
  };
}
