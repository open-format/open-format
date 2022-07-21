import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetMintingPrice(nft: OpenFormatNFT) {
  const { mutateAsync: setMintingPrice, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setMintingPrice>>,
    unknown,
    Parameters<typeof nft.setMintingPrice>[0]
  >(price => {
    return nft.setMintingPrice(price);
  });

  return {
    ...mutation,
    setMintingPrice,
  };
}
