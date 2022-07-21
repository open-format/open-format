import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetRoyalties(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setRoyalties>>,
    unknown,
    Parameters<typeof nft.setRoyalties>[0]
  >(params => {
    return nft.setRoyalties(params);
  });

  return {
    ...mutation,
    setRoyalties: mutateAsync,
  };
}
