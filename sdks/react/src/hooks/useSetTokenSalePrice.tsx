import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetTokenSalePrice(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setTokenSalePrice>>,
    unknown,
    Parameters<typeof nft.setTokenSalePrice>[0]
  >(params => {
    return nft.setTokenSalePrice(params);
  });

  return {
    ...mutation,
    setTokenSalePrice: mutateAsync,
  };
}
