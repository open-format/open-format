import { OpenFormatNFT } from '@simpleweb/open-format';
import { useMutation } from 'react-query';

/**
 * Hook to set the percentage of the primary commission
 * @param {OpenFormatNFT} nft A deployed NFT instance
 *
 * @example
 * ```tsx
 * const { ...mutation, setPrimaryCommissionPercent } = useSetPrimaryCommissionPercentage(nft);
 * ```
 *
 */
export function useSetPrimaryCommissionPercentage(nft: OpenFormatNFT) {
  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof nft.setPrimaryCommissionPercent>>,
    unknown,
    Parameters<typeof nft.setPrimaryCommissionPercent>[0]
  >(percent => {
    return nft.setPrimaryCommissionPercent(percent);
  });

  return {
    ...mutation,
    setPrimaryCommissionPercent: mutateAsync,
  };
}
