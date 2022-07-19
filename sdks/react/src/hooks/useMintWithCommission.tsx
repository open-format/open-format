import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useMintWithCommission() {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.mintWithCommission>>,
    unknown,
    Parameters<typeof sdk.mintWithCommission>[0]
  >(address => {
    return sdk.mintWithCommission(address);
  });

  return {
    ...mutation,
    mintWithCommission: mutateAsync,
  };
}
