import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

/**
 * Hook to get secondary commission percentage
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @returns {UseQueryResult}
 */
export function useGetSecondaryCommissionPercent(nft: OpenFormatNFT) {
  const query = useQuery<
    Awaited<ReturnType<typeof nft.getSecondaryCommissionPercent>>,
    unknown
  >(['secondary-commission'], () => nft.getSecondaryCommissionPercent());

  return query;
}
