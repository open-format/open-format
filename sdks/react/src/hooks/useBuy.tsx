import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

/**
 * Hook to buy
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, buy } = useBuy(nft);
 * ```
 *
 */
export function useBuy(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.buy>>,
    unknown,
    Parameters<typeof nft.buy>[0]
  >(tokenId => {
    return nft.buy(tokenId);
  });

  return {
    ...mutation,
    buy: mutateAsync,
  };
}
