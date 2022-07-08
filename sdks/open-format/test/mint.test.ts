import { ethers } from 'ethers';
import { OpenFormatSDK } from '../src/index';

describe('sdk.mint()', () => {
  it('mint an nft with a contract address', async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
    });

    await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });

    const receipt = await sdk.mint();

    expect(receipt.status).toBe(1);
  });

  it('will throw an error without a signer', () => {
    const sdk = new OpenFormatSDK({ network: 'http://localhost:8545' });

    expect(sdk.mint()).rejects.toThrow();
  });

  it('will throw an error if the networks do not match', () => {
    const sdk = new OpenFormatSDK({
      network: 'mumbai',
      signer: new ethers.Wallet(
        '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
    });

    expect(sdk.mint()).rejects.toThrow();
  });
});
