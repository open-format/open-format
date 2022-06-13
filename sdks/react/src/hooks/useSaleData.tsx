import { useEffect, useState } from 'react';
import { useOpenFormat } from '../provider';

export function useSaleData() {
  const { sdk } = useOpenFormat();
  // @TODO fix any
  const [saleData, setSaleData] = useState<any>();

  // @TODO take this out of an effect
  useEffect(() => {
    async function run() {
      // @TODO make the address a variable
      const result = await sdk.getSaleDataForToken(
        '0x021d35cd4849596f1013cf92f718ec7bf5541bc2'
      );

      setSaleData(result);
    }

    run();
  }, []);

  return { data: saleData };
}
