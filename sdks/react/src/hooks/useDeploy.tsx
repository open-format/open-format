import { useOpenFormat } from '../provider';

/**
 * Gets the deploy function from the sdk
 * @returns deploy function
 */
export function useDeploy() {
  const { sdk } = useOpenFormat();

  return {
    deploy: sdk.deploy.bind(sdk),
  };
}
