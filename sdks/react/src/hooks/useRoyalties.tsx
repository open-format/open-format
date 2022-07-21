import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

/**
 * Hook to get royalites for a price
 * @param {{ salePrice: number }} options - sales price
 * @returns royalties for price
 */
export function useRoyalties(nft: OpenFormatNFT, salePrice: number) {
  const query = useQuery(['getRoyalties', salePrice], () =>
    nft.getRoyalties({ salePrice })
  );

  return query;
}
