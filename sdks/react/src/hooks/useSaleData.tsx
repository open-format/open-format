import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Hook to get sales data for a specific token
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @param {{ tokenId: string }} options Sale Price
 * @returns {UseQueryResult}
 */
export function useSaleData({ tokenId }: { tokenId: string }) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['sale-data', tokenId], () =>
    sdk.getSaleDataForToken(tokenId)
  );

  return query;
}
