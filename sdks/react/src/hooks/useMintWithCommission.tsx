import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useMintWithCommission(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.mintWithCommission>>,
    unknown,
    Parameters<typeof nft.mintWithCommission>[0]
  >(address => {
    return nft.mintWithCommission(address);
  });

  return {
    ...mutation,
    mintWithCommission: mutateAsync,
  };
}
