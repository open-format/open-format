import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Hook to get sales data for token
 * @param {{ tokenId: string }} options - pass the `tokenId` to look up
 * @returns sales data for a token
 */
export function useSaleData({ tokenId }: { tokenId: string }) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['sale-data', tokenId], () =>
    sdk.getSaleDataForToken(tokenId)
  );

  return query;
}
