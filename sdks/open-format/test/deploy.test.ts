import { ethers } from 'ethers';
import { OpenFormatSDK } from '../src/index';
import fs from 'fs';
import path from 'path';
import { File } from 'nft.storage';

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

  const filePath = 'test/test-assets/testImage.png';
  async function fileFromPath(filePath: string) {
    const content = fs.readFileSync(filePath);
    return new File([content], path.basename(filePath), { type: 'image/png' });
  }

  it('can deploy with an NFTStorage token passed to  the deploy function', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
      factory: 'test-factory',
    });

    const receipt = await sdk.deploy(
      {
        maxSupply: 100,
        mintingPrice: 0.01,
        name: 'Test',
        symbol: 'TEST',
        image: await fileFromPath(filePath),
        description: 'this is a test NFT',
        releaseType: 'image',
        url: undefined,
      },
      undefined,
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY0OUMxZjBBRTdmYjMxNjI1NDNmZkEwNTc1NkM1QzNFNzI5MjhEYzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODAzNzcyOTMwNiwibmFtZSI6InRoZWZhY3RvcnkifQ._Jc515t7h-8-4tTrLUqAL5i3B4Zv2BKDcOjQnlIedgE'
    );

    expect(receipt.status).toBe(1);
  });
  it('can deploy with an NFTStorage token pass to the SDK constructor', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
      factory: 'test-factory',
      nftStorageToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY0OUMxZjBBRTdmYjMxNjI1NDNmZkEwNTc1NkM1QzNFNzI5MjhEYzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODAzNzcyOTMwNiwibmFtZSI6InRoZWZhY3RvcnkifQ._Jc515t7h-8-4tTrLUqAL5i3B4Zv2BKDcOjQnlIedgE',
    });

    const receipt = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      image: await fileFromPath(filePath),
      description: 'this is a test NFT',
      releaseType: 'image',
      url: undefined,
    });

    expect(receipt.status).toBe(1);
  });

  it('will throw an error without an nft storage token', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
      factory: 'test-factory',
    });

    expect(
      sdk.deploy(
        {
          maxSupply: 100,
          mintingPrice: 0.01,
          name: 'Test',
          symbol: 'TEST',
          image: await fileFromPath(filePath),
          description: 'this is a test NFT',
          releaseType: 'image',
          url: undefined,
        },
        undefined
      )
    ).rejects.toThrow();
  });
});
