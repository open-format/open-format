import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

/**
 * Hook to setup revenue sharing
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, setup } = useSetupRevenueSharing(nft);
 * ```
 *
 */
export function useSetupRevenueSharing(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setupRevenueSharing>>,
    unknown,
    Parameters<typeof nft.setupRevenueSharing>[0]
  >(params => {
    return nft.setupRevenueSharing(params);
  });

  return {
    ...mutation,
    setup: mutateAsync,
  };
}
