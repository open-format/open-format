import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to set the percentage of the secondary commission
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, setSecondaryCommissionPercentage } = useSetSecondaryCommissionPercentage(nft);
 * ```
 *
 */
export function useSetSecondaryCommissionPercentage(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setSecondaryCommissionPercent>>,
    unknown,
    Parameters<typeof nft.setSecondaryCommissionPercent>[0]
  >(percent => {
    return nft.setSecondaryCommissionPercent(percent);
  });

  return {
    ...mutation,
    setSecondaryCommissionPercentage: mutateAsync,
  };
}
