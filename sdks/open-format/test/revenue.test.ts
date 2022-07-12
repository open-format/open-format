import { ethers } from 'ethers';
import { OpenFormatSDK } from '../src/index';

describe('sdk revenue', () => {
  let sdk: null | OpenFormatSDK = null;

  beforeEach(async () => {
    sdk = new OpenFormatSDK({
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
  });

  it('sets up revenue sharing', async () => {
    const receipt = await sdk?.setupRevenueSharing({
      revShareExtensionAddress: '0x483C3aDD26C87d2F99DcCB84Cbf61844B6aeD212',
      collaborators: [
        '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
        '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
      ],
      shares: [7700, 1000],
      holderPercentage: 1000,
    });

    expect(receipt?.status).toBe(1);
  });
});
