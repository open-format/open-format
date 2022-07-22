import { ethers } from 'ethers';
import { OpenFormatNFT } from '../src/core/nft';
import { OpenFormatSDK } from '../src/index';

describe('sdk.mint()', () => {
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

  it('mints an NFT of a deployed contract', async () => {
    const receipt = await nft.mint();

    expect(receipt.status).toBe(1);
  });

  it('will throw an error if the networks do not match', async () => {
    nft.signer = new ethers.Wallet(
      '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
      new ethers.providers.JsonRpcProvider(
        'https://matic-mumbai.chainstacklabs.com/'
      )
    );

    expect(nft.mint()).rejects.toThrow();
  });

  it('sets the price of minting', async () => {
    const receipt = await nft.setMintingPrice(1000);

    expect(receipt.status).toBe(1);
  });

  it('sets the approved minting extension', async () => {
    const receipt = await nft.setApprovedMintingExtension(
      // Replace this with the correct address
      '0x0000000000000000000000000000000000000000'
    );

    expect(receipt.status).toBe(1);
  });
});
