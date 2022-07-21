import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

/**
 * Hook to get total supply
 * @returns BigNumber
 */
export function useGetTotalSupply(nft: OpenFormatNFT) {
  const query = useQuery(['total-supply'], () => nft.getTotalSupply());

  return query;
}
