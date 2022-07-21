import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetMaxSupply(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setMaxSupply>>,
    unknown,
    Parameters<typeof nft.setMaxSupply>[0]
  >(data => {
    return nft.setMaxSupply(data);
  });

  return {
    ...mutation,
    setMaxSupply: mutateAsync,
  };
}
