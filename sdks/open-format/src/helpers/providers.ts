import { ethers, providers, Signer } from 'ethers';
import { Chain } from '../types';

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

/**
 * Creates a signer from a private key or returns a signer if one is passed
 * @param signer
 * @param provider
 * @returns
 */
export function getSigner(
  signer: Signer | string,
  provider?: providers.Provider
) {
  if (typeof signer === 'string') {
    if (!provider) {
      throw new Error(
        'To create a signer from a private key a provider must be passed'
      );
    }

    const privateKey = signer;
    return new ethers.Wallet(privateKey, provider);
  }

  return signer;
}
