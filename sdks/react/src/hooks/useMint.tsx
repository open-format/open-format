import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useMint(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.mint>>,
    unknown
  >(() => {
    return nft.mint();
  });

  return {
    ...mutation,
    mint: mutateAsync,
  };
}
