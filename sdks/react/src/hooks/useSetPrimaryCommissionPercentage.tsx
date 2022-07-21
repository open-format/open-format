import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetPrimaryCommissionPercentage(nft: OpenFormatNFT) {
  const { mutateAsync: setPrimaryCommissionPercent, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setPrimaryCommissionPercent>>,
    unknown,
    Parameters<typeof nft.setPrimaryCommissionPercent>[0]
  >(percent => {
    return nft.setPrimaryCommissionPercent(percent);
  });

  return {
    ...mutation,
    setPrimaryCommissionPercent,
  };
}
