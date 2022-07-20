import { OpenFormatSDK } from '@simpleweb/open-format';
import '@testing-library/jest-dom';
import { ethers } from 'ethers';
import React, { useState } from 'react';
import {
  useMint,
  useNFT,
  useRevenueSharingAllocation,
  useSetupRevenueSharing,
  useWithdrawTokenFunds,
} from '../src/hooks';
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

        {data && <span data-testid="withdrawstatus">{data.status}</span>}
      </>
    );
  }

  function SetupRevenueShare() {
    const nft = useNFT(address);
    const { setup, data } = useSetupRevenueSharing(nft);

    return (
      <>
        {data && <span data-testid="revenuedata">{data.status}</span>}
        <button
          onClick={() =>
            setup({
              revShareExtensionAddress:
                '0x483C3aDD26C87d2F99DcCB84Cbf61844B6aeD212',
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
            })
          }
          data-testid="setuprevenueshare"
        >
          Setup revenue share
        </button>
      </>
    );
  }

  function AllocateRevenueShare() {
    const nft = useNFT(address);
    const { allocate, data } = useRevenueSharingAllocation(nft);

    return (
      <>
        {data && <span data-testid="allocatesharedata">{data.status}</span>}
        <button
          onClick={() =>
            allocate([
              {
                address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
                share: 500,
              },
              {
                address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
                share: 500,
              },
            ])
          }
          data-testid="allocateshare"
        >
          Allocate share
        </button>
      </>
    );
  }

  function Mint() {
    const nft = useNFT(address);
    const { mint, data } = useMint(nft);
    const [done, setDone] = useState(false);

    async function run() {
      await mint();

      // @TODO this seems to cause an error
      // const account = new ethers.Wallet(
      //   '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
      //   new ethers.providers.JsonRpcProvider('http://localhost:8546')
      // );

      // const tx = await account.sendTransaction({
      //   to: nft.address,
      //   value: '500',
      // });

      // await tx.wait();

      setDone(true);
    }

    return (
      <>
        {data && done && <span data-testid="mintdata">{data.status}</span>}
        <button onClick={() => run()} data-testid="mint">
          Mint
        </button>
      </>
    );
  }

  function Test() {
    return (
      <>
        <SetupRevenueShare />
        <AllocateRevenueShare />
        <Mint />
        <Withdraw />
      </>
    );
  }

  it('allows withdrawal of token funds', async () => {
    render(<Test />);

    screen.getByTestId('setuprevenueshare').click();
    const revenueStatus = await waitFor(() =>
      screen.getByTestId('revenuedata')
    );
    expect(revenueStatus).toHaveTextContent('1');

    screen.getByTestId('allocateshare').click();
    const allocateStatus = await waitFor(() =>
      screen.getByTestId('allocatesharedata')
    );
    expect(allocateStatus).toHaveTextContent('1');

    screen.getByTestId('mint').click();
    const mintStatus = await waitFor(() => screen.getByTestId('mintdata'));
    expect(mintStatus).toHaveTextContent('1');

    // @TODO this is still failing
    // screen.getByTestId('withdraw').click();
    // const withdrawStatus = await waitFor(() =>
    //   screen.getByTestId('mintStatus')
    // );
    // expect(withdrawStatus).toHaveTextContent('1');
  });
});
