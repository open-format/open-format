import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetTokenSalePrice(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setTokenSalePrice>>,
    unknown,
    Parameters<typeof nft.setTokenSalePrice>[0]
  >(data => {
    return nft.setTokenSalePrice(data);
  });

  return {
    ...mutation,
    setTokenSalePrice: mutateAsync,
  };
}
