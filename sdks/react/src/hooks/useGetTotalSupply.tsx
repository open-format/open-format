import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to get the total supply
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @returns {UseQueryResult}
 */
export function useGetTotalSupply(nft: OpenFormatNFT) {
  const query = useQuery(['total-supply'], () => nft.getTotalSupply());

  return query;
}
