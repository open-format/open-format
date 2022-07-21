import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

export function useGetSecondaryCommissionPercent(nft: OpenFormatNFT) {
  const query = useQuery<
    Awaited<ReturnType<typeof nft.getSecondaryCommissionPercent>>,
    unknown
  >(['secondary-commission'], () => nft.getSecondaryCommissionPercent());

  return query;
}
