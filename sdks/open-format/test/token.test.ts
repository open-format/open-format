import { BigNumber, ethers } from 'ethers';
import { OpenFormatNFT } from '../src/core/nft';
import { OpenFormatSDK } from '../src/index';

describe('sdk token', () => {
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

    await nft.mint();
  });

  it('set token sale price', async () => {
    const receipt = await nft.setTokenSalePrice({ tokenId: 0, price: 1000 });

    expect(receipt?.status).toBe(1);
  });

  it('get token sale price', async () => {
    const price = await nft.getTokenSalePrice(0);

    expect(price).toBeInstanceOf(BigNumber);
  });

  it('get the creator of a token', async () => {
    const creator = await nft.getTokenCreator(0);

    expect(typeof creator).toBe('string');
  });
});
