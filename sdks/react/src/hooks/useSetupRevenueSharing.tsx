import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetupRevenueSharing(nft: OpenFormatNFT) {
  const { mutateAsync: setup, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setupRevenueSharing>>,
    unknown,
    Parameters<typeof nft.setupRevenueSharing>[0]
  >(params => {
    return nft.setupRevenueSharing(params);
  });

  return {
    ...mutation,
    setup,
  };
}
