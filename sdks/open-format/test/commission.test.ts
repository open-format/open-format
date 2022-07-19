import { ethers } from 'ethers';
import { OpenFormatSDK } from '../src/index';

describe('sdk commission', () => {
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

  it('sets the primary commission percetnage', async () => {
    const receipt = await sdk?.setPrimaryCommissionPercent(1000);

    expect(receipt?.status).toBe(1);
  });

  it('sets the secondary commission percetnage', async () => {
    const receipt = await sdk?.setSecondaryCommissionPercent(1000);

    expect(receipt?.status).toBe(1);
  });

  it('mints with commission', async () => {
    const receipt = await sdk?.mintWithCommission(
      '0xee4abd006630aea6fa3e685c99506db31c09b3f4'
    );

    expect(receipt?.status).toBe(1);
  });

  it('buy with commission', async () => {
    await sdk?.mintWithCommission('0xee4abd006630aea6fa3e685c99506db31c09b3f4');

    await sdk?.setTokenSalePrice({ tokenId: 0, price: 1000 });

    const receipt = await sdk?.buyWithCommission({
      tokenId: 0,
      address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
    });

    expect(receipt?.status).toBe(1);
  });
});
