import dotenv from 'dotenv';
import { OpenFormatSDK } from '../src/index';

dotenv.config({ path: '../../.env' });

const sdk = new OpenFormatSDK();

describe('contract', () => {
  it('deploys a contract', async () => {
    const receipt = await sdk.deploy({
      RPC_URL: 'https://matic-mumbai.chainstacklabs.com',
      WALLET_PRIVATE_KEY: process.env.WALLET_PRIVATE_KEY as string,
      nft: {
        maxSupply: 100,
        mintingPrice: '0.01',
        name: 'Test',
        symbol: 'TEST',
        url: 'ipfs://',
      },
    });

    expect(typeof receipt.transactionHash).toBe('string');
  }, 20_000);
});
