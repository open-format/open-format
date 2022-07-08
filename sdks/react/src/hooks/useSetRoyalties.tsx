import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useSetRoyalties() {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.setRoyalties>>,
    unknown,
    Parameters<typeof sdk.setRoyalties>[0]
  >(params => {
    return sdk.setRoyalties(params);
  });

  return {
    ...mutation,
    setRoyalties: mutateAsync,
  };
}
