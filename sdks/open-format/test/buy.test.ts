import { ethers } from 'ethers';
import { OpenFormatNFT } from '../src/core/nft';
import { OpenFormatSDK } from '../src/index';

describe('sdk buy', () => {
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

  it('buy', async () => {
    await nft.setTokenSalePrice({ tokenId: 0, price: 1000 });

    const receipt = await nft.buy(0);

    expect(receipt?.status).toBe(1);
  });
});
