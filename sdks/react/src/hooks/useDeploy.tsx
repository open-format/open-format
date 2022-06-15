import { useOpenFormat } from '../provider';

export function useDeploy() {
  const { sdk } = useOpenFormat();

  return {
    deploy: sdk.deploy.bind(sdk),
  };
}
