import { providers } from 'ethers';

export type Chain = 'mumbai' | (string & {});

/**
 * Returns a network URL base on a chain e.g. 'mumbai' and allows for
 * custom URLs
 * @param chain
 * @returns
 */
export function getProviderUrl(chain: Chain) {
  switch (chain) {
    case 'mumbai':
      return 'https://matic-mumbai.chainstacklabs.com/';
    default:
      if (chain.startsWith('http')) {
        return chain as string;
      } else {
        throw new Error(`Couldn't get provider for '${chain}'`);
      }
  }
}

/**
 * Creates a new JsonRpcProvider based on a network URL
 * @param networkUrl
 * @returns
 */
export function getProviderFromUrl(networkUrl: string) {
  return new providers.JsonRpcProvider(networkUrl);
}
