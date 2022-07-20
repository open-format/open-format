import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useWithdrawTokenFunds(nft: OpenFormatNFT) {
  const { mutateAsync: withdraw, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.withdrawTokenFunds>>,
    unknown,
    Parameters<typeof nft.withdrawTokenFunds>[0]
  >(params => {
    return nft.withdrawTokenFunds(params);
  });

  return {
    ...mutation,
    withdraw,
  };
}
