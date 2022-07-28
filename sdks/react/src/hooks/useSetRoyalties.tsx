import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

/**
 * Hook to setup royalties to be paid to an address
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, setRoyalties } = useSetRoyalties(nft);
 * ```
 *
 */
export function useSetRoyalties(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setRoyalties>>,
    unknown,
    Parameters<typeof nft.setRoyalties>[0]
  >(params => {
    return nft.setRoyalties(params);
  });

  return {
    ...mutation,
    setRoyalties: mutateAsync,
  };
}
