import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to mint with commission
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, mintWithCommission } = useMintWithCommission(nft);
 * ```
 *
 */
export function useMintWithCommission(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.mintWithCommission>>,
    unknown,
    Parameters<typeof nft.mintWithCommission>[0]
  >(address => {
    return nft.mintWithCommission(address);
  });

  return {
    ...mutation,
    mintWithCommission: mutateAsync,
  };
}
