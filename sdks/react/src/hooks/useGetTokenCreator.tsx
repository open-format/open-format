import { OpenFormatNFT } from '@simpleweb/open-format';
import { BigNumberish } from 'ethers';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to get the creator of a token
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @param {BigNumberish} tokenId Token ID
 * @returns {UseQueryResult}
 */
export function useGetTokenCreator(nft: OpenFormatNFT, tokenId: BigNumberish) {
  const query = useQuery(['token-creator', tokenId], () =>
    nft.getTokenCreator(tokenId)
  );

  return query;
}
