import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

/**
 * Hook to set the price of minting
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, setMintingPrice } = useSetMintingPrice(nft);
 * ```
 *
 */
export function useSetMintingPrice(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setMintingPrice>>,
    unknown,
    Parameters<typeof nft.setMintingPrice>[0]
  >(price => {
    return nft.setMintingPrice(price);
  });

  return {
    ...mutation,
    setMintingPrice: mutateAsync,
  };
}
