import ganache from 'ganache';
import { OpenFormatSDK } from '../src/index';
import { ethers } from 'ethers';

let server: ReturnType<typeof ganache.server>;

beforeAll(() => {
  return new Promise<void>((resolve, reject) => {
    server = ganache.server({
      logging: {
        quiet: true,
      },
      wallet: {
        accounts: [
          {
            balance: 1000000000000000000000,
            secretKey:
              '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
          },
        ],
      },
    });

    server.listen(8545, async err => {
      if (err) {
        reject();
      }

      resolve();
    });
  });
});

afterEach(() => {
  server.close();
});

const sdk = new OpenFormatSDK({
  network: 'http://localhost:8545',
  signer: new ethers.Wallet(
    '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
    new ethers.providers.JsonRpcProvider('http://localhost:8545')
  ),
});

describe('contract', () => {
  it('deploys a contract', async () => {
    const receipt = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: '0.01',
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });

    expect(receipt.status).toBe(1);
  });
});
