import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useBuyWithCommission() {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.buyWithCommission>>,
    unknown,
    Parameters<typeof sdk.buyWithCommission>[0]
  >(data => {
    return sdk.buyWithCommission(data);
  });

  return {
    ...mutation,
    buyWithCommission: mutateAsync,
  };
}
