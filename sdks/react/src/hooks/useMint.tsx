import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to mint
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, mint } = useMint(nft);
 * ```
 *
 */
export function useMint(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.mint>>,
    unknown
  >(() => {
    return nft.mint();
  });

  return {
    ...mutation,
    mint: mutateAsync,
  };
}
