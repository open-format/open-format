import { ethers } from 'ethers';
import { OpenFormatSDK } from '../src/index';

describe('sdk royalties', () => {
  it('sets royalties', async () => {
    const sdk = new OpenFormatSDK({
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

    const nft = sdk.getNFT(contractAddress);

    const receipt = await nft.setRoyalties({
      royaltyReceiverAddress: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
      royaltyPercentage: 500,
    });

    expect(receipt.status).toBe(1);
  });

  it('gets royalties', async () => {
    const sdk = new OpenFormatSDK({
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

    const nft = sdk.getNFT(contractAddress);

    await nft.setRoyalties({
      royaltyReceiverAddress: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
      royaltyPercentage: 500,
    });

    const result = await nft.getRoyalties({ salePrice: 500 });

    expect(result[1].toNumber()).toBe(25);
  });
});
