import { useMutation } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Gets the deploy function from the sdk
 * @returns deploy function
 */
export function useDeploy() {
  const { sdk } = useOpenFormat();

  // @TODO fix types
  const { mutateAsync, ...mutation } = useMutation<
    unknown,
    unknown,
    Parameters<typeof sdk.deploy>[0]
  >(data => {
    return sdk.deploy(data);
  });

  return {
    ...mutation,
    deploy: mutateAsync,
  };
}
