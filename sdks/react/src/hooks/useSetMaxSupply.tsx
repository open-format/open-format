import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to set the max supply
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, setMaxSupply } = useSetMaxSupply(nft);
 * ```
 *
 */
export function useSetMaxSupply(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setMaxSupply>>,
    unknown,
    Parameters<typeof nft.setMaxSupply>[0]
  >(amount => {
    return nft.setMaxSupply(amount);
  });

  return {
    ...mutation,
    setMaxSupply: mutateAsync,
  };
}
