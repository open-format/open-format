import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to get max supply
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @returns {UseQueryResult}
 */
export function useGetMaxSupply(nft: OpenFormatNFT) {
  const query = useQuery(['max-supply'], () => nft.getMaxSupply());

  return query;
}
