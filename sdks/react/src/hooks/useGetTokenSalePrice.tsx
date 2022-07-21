import { OpenFormatNFT } from '@simpleweb/open-format';
import { BigNumberish } from 'ethers';
import { useQuery } from 'react-query';

/**
 * Hook to get sale price for a token
 * @param {{ token: BigNumberish }} token - Token ID
 * @returns BigNumber
 */
export function useGetTokenSalePrice(nft: OpenFormatNFT, token: BigNumberish) {
  const query = useQuery(['getTokenSalePrice', token], () =>
    nft.getTokenSalePrice(token)
  );

  return query;
}
