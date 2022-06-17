import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

export function useMint() {
  const { sdk } = useOpenFormat();

  // @TODO fix types
  const { mutateAsync, ...mutation } = useMutation<
    unknown,
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
