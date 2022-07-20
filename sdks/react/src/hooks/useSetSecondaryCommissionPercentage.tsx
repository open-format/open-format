import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetSecondaryCommissionPercentage(nft: OpenFormatNFT) {
  const {
    mutateAsync: setSecondaryCommissionPercentage,
    ...mutation
  } = useMutation<
    Awaited<ReturnType<typeof nft.setSecondaryCommissionPercent>>,
    unknown,
    Parameters<typeof nft.setSecondaryCommissionPercent>[0]
  >(percent => {
    return nft.setSecondaryCommissionPercent(percent);
  });

  return {
    ...mutation,
    setSecondaryCommissionPercentage,
  };
}
