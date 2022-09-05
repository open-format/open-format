import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from '@tanstack/react-query';

/**
 * Hook to toggle the paused state
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, togglePauseState } = useTogglePauseState(nft);
 * ```
 *
 */
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
