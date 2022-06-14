import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

export function useSaleData({ tokenId }: { tokenId: string }) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['saleData', tokenId], () =>
    sdk.getSaleDataForToken(tokenId)
  );

  return query;
}
