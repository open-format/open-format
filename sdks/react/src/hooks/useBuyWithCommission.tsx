import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useBuyWithCommission(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.buyWithCommission>>,
    unknown,
    Parameters<typeof nft.buyWithCommission>[0]
  >(data => {
    return nft.buyWithCommission(data);
  });

  return {
    ...mutation,
    buyWithCommission: mutateAsync,
  };
}
