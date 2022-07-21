import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useBuy(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.buy>>,
    unknown,
    Parameters<typeof nft.buy>[0]
  >(data => {
    return nft.buy(data);
  });

  return {
    ...mutation,
    buy: mutateAsync,
  };
}
