import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useMint() {
  const { sdk } = useOpenFormat();

  const { mutateAsync, ...mutation } = useMutation<
    Awaited<ReturnType<typeof sdk.mint>>,
    unknown,
    Parameters<typeof sdk.mint>[0]
  >(data => {
    return sdk.mint(data);
  });

  return {
    ...mutation,
    mint: mutateAsync,
  };
}
