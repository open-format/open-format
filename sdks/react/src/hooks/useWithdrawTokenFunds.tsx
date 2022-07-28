import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

/**
 * Hook to withdraw token funds
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, withdraw } = useWithdrawTokenFunds(nft);
 * ```
 *
 */
export function useWithdrawTokenFunds(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.withdrawTokenFunds>>,
    unknown,
    Parameters<typeof nft.withdrawTokenFunds>[0]
  >(tokenId => {
    return nft.withdrawTokenFunds(tokenId);
  });

  return {
    ...mutation,
    withdraw: mutateAsync,
  };
}
