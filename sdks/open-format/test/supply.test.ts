import { BigNumber, ethers } from 'ethers';
import { OpenFormatNFT } from '../src/core/nft';
import { OpenFormatSDK } from '../src/index';

describe('sdk supply', () => {
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

  it('gets the max supply', async () => {
    const receipt = await nft.getMaxSupply();

    expect(receipt).toBeInstanceOf(BigNumber);
  });

  it('sets the max supply', async () => {
    const receipt = await nft.setMaxSupply(1000);

    expect(receipt?.status).toBe(1);
  });

  it('gets the total supply', async () => {
    const receipt = await nft.getTotalSupply();

    expect(receipt).toBeInstanceOf(BigNumber);
  });
});
