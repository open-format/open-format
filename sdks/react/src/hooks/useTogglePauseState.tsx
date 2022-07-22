import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

export function useTogglePauseState(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.togglePauseState>>,
    unknown
  >(() => {
    return nft.togglePauseState();
  });

  return {
    ...mutation,
    togglePauseState: mutateAsync,
  };
}
