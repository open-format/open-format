import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

/**
 * Hook to get maximum supply
 * @returns BigNumber
 */
export function useGetMaxSupply(nft: OpenFormatNFT) {
  const query = useQuery(['max-supply'], () => nft.getMaxSupply());

  return query;
}
