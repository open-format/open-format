import { OpenFormatNFT } from '@simpleweb/open-format';
import { BigNumberish } from 'ethers';
import { useQuery } from 'react-query';

/**
 * Hook to get balance for a token
 * @param {{ token: BigNumberish }} token - Token ID
 * @returns BigNumber
 */
export function useGetTokenBalance(nft: OpenFormatNFT, token: BigNumberish) {
  const query = useQuery(['getTokenBalance', token], () =>
    nft.getTokenBalance(token)
  );

  return query;
}
