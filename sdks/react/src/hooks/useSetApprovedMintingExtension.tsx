import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useSetApprovedMintingExtension(nft: OpenFormatNFT) {
  const { mutateAsync: setApprovedMintingExtension, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setApprovedMintingExtension>>,
    unknown,
    Parameters<typeof nft.setApprovedMintingExtension>[0]
  >(address => {
    return nft.setApprovedMintingExtension(address);
  });

  return {
    ...mutation,
    setApprovedMintingExtension,
  };
}
