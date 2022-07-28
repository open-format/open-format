import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

/**
 * Hook to get the sale price of a token
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @param {number} salePrice Sale Price
 * @returns {UseQueryResult}
 */
export function useRoyalties(nft: OpenFormatNFT, salePrice: number) {
  const query = useQuery(['royalties', salePrice], () =>
    nft.getRoyalties({ salePrice })
  );

  return query;
}
