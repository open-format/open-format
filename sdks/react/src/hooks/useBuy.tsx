import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useBuy() {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.buy>>,
    unknown,
    Parameters<typeof sdk.buy>[0]
  >(data => {
    return sdk.buy(data);
  });

  return {
    ...mutation,
    buy: mutateAsync,
  };
}
