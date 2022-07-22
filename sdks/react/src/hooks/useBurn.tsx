import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useBurn(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.burn>>,
    unknown,
    Parameters<typeof nft.burn>[0]
  >(tokenId => {
    return nft.burn(tokenId);
  });

  return {
    ...mutation,
    burn: mutateAsync,
  };
}
