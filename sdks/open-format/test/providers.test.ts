import { ethers, Signer } from 'ethers';
import {
  getProviderFromUrl,
  getProviderUrl,
  getSigner,
} from '../src/helpers/providers';

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

  describe('getSigner()', () => {
    it('creates a signer if a private key is passed', () => {
      const signer = getSigner(
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      );

      expect(signer).toBeInstanceOf(Signer);
    });

    it('returns the signer that is passed', () => {
      const signer = getSigner(
        new ethers.Wallet(
          '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
          new ethers.providers.JsonRpcProvider('http://localhost:8545')
        )
      );

      expect(signer).toBeInstanceOf(Signer);
    });

    it('should throw an error if only a private key is passed', () => {
      expect(() =>
        getSigner(
          '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7'
        )
      ).toThrow();
    });
  });
});
