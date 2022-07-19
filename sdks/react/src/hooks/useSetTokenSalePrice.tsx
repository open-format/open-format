import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useSetTokenSalePrice() {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.setTokenSalePrice>>,
    unknown,
    Parameters<typeof sdk.setTokenSalePrice>[0]
  >(data => {
    return sdk.setTokenSalePrice(data);
  });

  return {
    ...mutation,
    setTokenSalePrice: mutateAsync,
  };
}
