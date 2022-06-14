import { SaleDataResponse } from '@simpleweb/open-format';
import { useEffect, useState } from 'react';
import { useOpenFormat } from '../provider';

export function useSaleData({ tokenId }: { tokenId: string }) {
  const { sdk } = useOpenFormat();
  const [saleData, setSaleData] = useState<SaleDataResponse>();

  // @TODO take this out of an effect
  useEffect(() => {
    async function run() {
      const result = await sdk.getSaleDataForToken(tokenId);

      setSaleData(result);
    }

    run();
  }, []);

  return { data: saleData };
}
