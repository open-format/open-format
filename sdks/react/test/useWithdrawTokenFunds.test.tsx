import { OpenFormatSDK } from '@simpleweb/open-format';
import '@testing-library/jest-dom';
import { ethers } from 'ethers';
import React from 'react';
import { useNFT, useWithdrawTokenFunds } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';

let address: string;

describe('useWithdrawTokenFunds', () => {
  beforeEach(async () => {
    const sdk = new OpenFormatSDK({
      network: 'http://localhost:8546',
      signer: new ethers.Wallet(
        '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        new ethers.providers.JsonRpcProvider('http://localhost:8546')
      ),
    });

    const { contractAddress } = await sdk.deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });

    address = contractAddress;

    const nft = sdk.getNFT(contractAddress);

    const account = new ethers.Wallet(
      '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
      new ethers.providers.JsonRpcProvider('http://localhost:8546')
    );

    await nft.setupRevenueSharing({
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

    await nft.allocateRevenueShares([
      {
        address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
        share: 500,
      },
      {
        address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
        share: 500,
      },
    ]);

    await nft.mint();

    const tx = await account.sendTransaction({
      to: nft.address,
      value: '500',
    });

    await tx.wait();
  });

  function Withdraw() {
    const nft = useNFT(address);
    const { withdraw, data } = useWithdrawTokenFunds(nft);

    return (
      <>
        <button
          onClick={() => {
            withdraw(0);
          }}
          data-testid="withdraw"
        >
          Withdraw
        </button>

        {data && <span data-testid="status">{data.status}</span>}
      </>
    );
  }

  it('allows withdrawal of token funds', async () => {
    render(<Withdraw />);
    screen.getByTestId('withdraw').click();
    const status = await waitFor(() => screen.getByTestId('status'));
    expect(status).toHaveTextContent('1');
  });
});
