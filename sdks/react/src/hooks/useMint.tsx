import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useMint() {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.mint>>,
    unknown
  >(() => {
    return sdk.mint();
  });

  return {
    ...mutation,
    mint: mutateAsync,
  };
}
