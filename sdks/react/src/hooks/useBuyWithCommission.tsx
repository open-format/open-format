import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to buy with commission
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, buyWithCommission } = useBuyWithCommission(nft);
 * ```
 *
 */
export function useBuyWithCommission(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.buyWithCommission>>,
    unknown,
    Parameters<typeof nft.buyWithCommission>[0]
  >(params => {
    return nft.buyWithCommission(params);
  });

  return {
    ...mutation,
    buyWithCommission: mutateAsync,
  };
}
