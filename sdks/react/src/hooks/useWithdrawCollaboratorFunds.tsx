import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

/**
 * Hook to withdraw collaborator funds
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, withdraw } = useWithdrawCollaboratorFunds(nft);
 * ```
 *
 */
export function useWithdrawCollaboratorFunds(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.withdrawCollaboratorFunds>>,
    unknown,
    Parameters<typeof nft.withdrawCollaboratorFunds>[0]
  >(address => {
    return nft.withdrawCollaboratorFunds(address);
  });

  return {
    ...mutation,
    withdraw: mutateAsync,
  };
}
