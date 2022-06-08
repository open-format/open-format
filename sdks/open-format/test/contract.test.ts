import { OpenFormatSDK } from '../src/index';

const sdk = new OpenFormatSDK();

describe('contract', () => {
  it('deploys a contract', async () => {
    const receipt = await sdk.deploy({
      RPC_URL: 'http://localhost:8545',
      WALLET_PRIVATE_KEY:
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
      nft: {
        maxSupply: 100,
        mintingPrice: '0.01',
        name: 'Test',
        symbol: 'TEST',
        url: 'ipfs://',
      },
    });

    expect(receipt.status).toBe(1);
  });
});
