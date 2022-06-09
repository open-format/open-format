import { ethers } from 'ethers';
import { getProviderFromUrl, getProviderUrl } from '../src/helpers/providers';

describe('providers', () => {
  describe('getProviderUrl()', () => {
    it('returns a provider url based on a network', () => {
      const url = getProviderUrl('mumbai');
      expect(url).toBe('https://matic-mumbai.chainstacklabs.com/');
    });

    it('allows you to provide a custom http(s) chain', () => {
      expect(getProviderUrl('http://localhost:8545')).toBe(
        'http://localhost:8545'
      );
      expect(getProviderUrl('https://localhost:8545')).toBe(
        'https://localhost:8545'
      );
    });

    it('should throw an error with incompatible chains', () => {
      expect(() => getProviderUrl('raptor')).toThrow();
      expect(() => getProviderUrl('ws://localhost:8545')).toThrow();
    });
  });

  describe('getProviderFromUrl()', () => {
    it('retuns a new JSON RPC provider given a network URL', () => {
      const provider = getProviderFromUrl(
        'https://matic-mumbai.chainstacklabs.com/'
      );

      expect(provider).toBeInstanceOf(ethers.providers.JsonRpcProvider);
    });
  });
});
