import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useWithdrawCollaboratorFunds(nft: OpenFormatNFT) {
  const { mutateAsync: withdraw, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.withdrawCollaboratorFunds>>,
    unknown,
    Parameters<typeof nft.withdrawCollaboratorFunds>[0]
  >(params => {
    return nft.withdrawCollaboratorFunds(params);
  });

  return {
    ...mutation,
    withdraw,
  };
}
