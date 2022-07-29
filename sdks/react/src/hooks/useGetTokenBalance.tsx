import { OpenFormatNFT } from '@simpleweb/open-format';
import { BigNumberish } from 'ethers';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to get the balance of a token
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @param {BigNumberish} tokenId Token ID
 * @returns {UseQueryResult}
 */
export function useGetTokenBalance(nft: OpenFormatNFT, tokenId: BigNumberish) {
  const query = useQuery(['token-balance', tokenId], () =>
    nft.getTokenBalance(tokenId)
  );

  return query;
}
