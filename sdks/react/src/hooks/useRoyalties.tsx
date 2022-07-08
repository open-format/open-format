import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Hook to get royalites for a price
 * @param {{ salePrice: number }} options - sales price
 * @returns royalties for price
 */
export function useRoyalties({ salePrice }: { salePrice: number }) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['getRoyalties', salePrice], () =>
    sdk.getRoyalties({ salePrice })
  );

  return query;
}
