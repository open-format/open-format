import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to allocate revenue shares
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, allocate } = useRevenueSharingAllocation(nft);
 * ```
 *
 */
export function useRevenueSharingAllocation(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.allocateRevenueShares>>,
    unknown,
    Parameters<typeof nft.allocateRevenueShares>[0]
  >(params => {
    return nft.allocateRevenueShares(params);
  });

  return {
    ...mutation,
    allocate: mutateAsync,
  };
}
