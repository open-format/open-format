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
        {
          address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
          share: 7700,
        },
        {
          address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
          share: 1000,
        },
      ],
      holderPercentage: 1000,
    });

    expect(receipt?.status).toBe(1);
  });

  it('allocation of shares', async () => {
    await sdk?.setupRevenueSharing({
      revShareExtensionAddress: '0x483C3aDD26C87d2F99DcCB84Cbf61844B6aeD212',
      collaborators: [
        {
          address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
          share: 1000,
        },
        {
          address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
          share: 1000,
        },
      ],
      holderPercentage: 5000,
    });

    const receipt = await sdk?.allocateRevenueShares([
      {
        address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
        share: 500,
      },
      {
        address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
        share: 500,
      },
    ]);

    expect(receipt?.status).toBe(1);
  });

  it('allows withdrawal of collaborator funds', async () => {
    await sdk?.setupRevenueSharing({
      revShareExtensionAddress: '0x483C3aDD26C87d2F99DcCB84Cbf61844B6aeD212',
      collaborators: [
        {
          address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
          share: 1000,
        },
        {
          address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
          share: 1000,
        },
      ],
      holderPercentage: 5000,
    });

    await sdk?.allocateRevenueShares([
      {
        address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
        share: 500,
      },
      {
        address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
        share: 500,
      },
    ]);

    await sdk?.mint();

    const receipt = await sdk?.withdrawCollaboratorFunds(
      '0xee4abd006630aea6fa3e685c99506db31c09b3f4'
    );

    expect(receipt?.status).toBe(1);
  });

  it('allows withdrawal of token funds', async () => {
    const account = new ethers.Wallet(
      '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
      new ethers.providers.JsonRpcProvider('http://localhost:8545')
    );

    await sdk?.setupRevenueSharing({
      revShareExtensionAddress: '0x483C3aDD26C87d2F99DcCB84Cbf61844B6aeD212',
      collaborators: [
        {
          address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
          share: 1000,
        },
        {
          address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
          share: 1000,
        },
      ],
      holderPercentage: 5000,
    });

    await sdk?.allocateRevenueShares([
      {
        address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
        share: 500,
      },
      {
        address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
        share: 500,
      },
    ]);

    await sdk?.mint();

    await account.sendTransaction({
      to: sdk?.options.contractAddress,
      value: '500',
    });

    const receipt = await sdk?.withdrawTokenFunds(0);

    expect(receipt?.status).toBe(1);
  });
});
