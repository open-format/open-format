import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

/**
 * Hook to get primary commission percentage
 * @returns BigNumber
 */
export function useGetPrimaryCommissionPercent(nft: OpenFormatNFT) {
  const query = useQuery<
    Awaited<ReturnType<typeof nft.getPrimaryCommissionPercent>>,
    unknown
  >(['primary-commission'], () => nft.getPrimaryCommissionPercent());

  return query;
}
