import { OpenFormatNFT } from '@simpleweb/open-format';
import { BigNumberish } from 'ethers';
import { useQuery } from 'react-query';

/**
 * Hook to get creator of a token
 * @param {{ token: BigNumberish }} token - Token ID
 * @returns
 */
export function useGetTokenCreator(nft: OpenFormatNFT, token: BigNumberish) {
  const query = useQuery(['token-creator', token], () =>
    nft.getTokenCreator(token)
  );

  return query;
}
