import { BigNumber, ethers } from 'ethers';
import { OpenFormatNFT } from '../src/core/nft';
import { OpenFormatSDK } from '../src/index';

describe('sdk commission', () => {
  let sdk: null | OpenFormatSDK = null;
  let nft: OpenFormatNFT;

  beforeEach(async () => {
    sdk = new OpenFormatSDK({
      network: 'http://localhost:8545',
      signer: new ethers.Wallet(
        '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        new ethers.providers.JsonRpcProvider('http://localhost:8545')
      ),
    });

    const { contractAddress } = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });

    nft = sdk.getNFT(contractAddress);
  });

  it('sets the primary commission percetnage', async () => {
    const receipt = await nft.setPrimaryCommissionPercent(1000);

    expect(receipt?.status).toBe(1);
  });

  it('gets the primary commission percetnage', async () => {
    const receipt = await nft.getPrimaryCommissionPercent();

    expect(receipt).toBeInstanceOf(BigNumber);
  });

  it('sets the secondary commission percetnage', async () => {
    const receipt = await nft.setSecondaryCommissionPercent(1000);

    expect(receipt?.status).toBe(1);
  });

  it('gets the secondary commission percetnage', async () => {
    const receipt = await nft.getSecondaryCommissionPercent();

    expect(receipt).toBeInstanceOf(BigNumber);
  });

  it('mints with commission', async () => {
    const receipt = await nft.mintWithCommission(
      '0xee4abd006630aea6fa3e685c99506db31c09b3f4'
    );

    expect(receipt?.status).toBe(1);
  });

  it('buy with commission', async () => {
    await nft.mintWithCommission('0xee4abd006630aea6fa3e685c99506db31c09b3f4');

    await nft.setTokenSalePrice({ tokenId: 0, price: 1000 });

    const receipt = await nft.buyWithCommission({
      tokenId: 0,
      address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
    });

    expect(receipt?.status).toBe(1);
  });
});
