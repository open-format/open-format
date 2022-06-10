import { ethers } from 'ethers';
import { OpenFormatSDK } from '../src/index';

describe('sdk.deploy()', () => {
  it('can deploy with a Signer', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
    });

    const receipt = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });

    expect(receipt.status).toBe(1);
  });

  it('can deploy with a private key', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer:
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
    });

    const receipt = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test 1',
      symbol: 'TEST1',
      url: 'ipfs://',
    });

    expect(receipt.status).toBe(1);
  });

  it('will throw an error without a signer', () => {
    const sdk = new OpenFormatSDK({ network: 'mumbai' });

    expect(
      sdk.deploy({
        maxSupply: 100,
        mintingPrice: 0.01,
        name: 'Test 1',
        symbol: 'TEST1',
        url: 'ipfs://',
      })
    ).rejects.toThrow();
  });

  it('will throw an error if the networks do not match', () => {
    const sdk = new OpenFormatSDK({
      network: 'mumbai',
      signer: new ethers.Wallet(
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
    });

    expect(
      sdk.deploy({
        maxSupply: 100,
        mintingPrice: 0.01,
        name: 'Test 1',
        symbol: 'TEST1',
        url: 'ipfs://',
      })
    ).rejects.toThrow();
  });
});
