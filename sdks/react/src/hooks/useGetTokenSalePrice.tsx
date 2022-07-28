import { OpenFormatNFT } from '@simpleweb/open-format';
import { BigNumberish } from 'ethers';
import { useQuery } from 'react-query';

/**
 * Hook to get the sale price of a token
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @param {BigNumberish} tokenId Token ID
 * @returns {UseQueryResult}
 */
export function useGetTokenSalePrice(
  nft: OpenFormatNFT,
  tokenId: BigNumberish
) {
  const query = useQuery(['getTokenSalePrice', tokenId], () =>
    nft.getTokenSalePrice(tokenId)
  );

  return query;
}
