import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to burn a token
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, burn } = useBurn(nft);
 * ```
 *
 * [SDK: Burn](/js/nft.md#burn)
 */
export function useBurn(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.burn>>,
    unknown,
    Parameters<typeof nft.burn>[0]
  >(tokenId => {
    return nft.burn(tokenId);
  });

  return {
    ...mutation,
    burn: mutateAsync,
  };
}
