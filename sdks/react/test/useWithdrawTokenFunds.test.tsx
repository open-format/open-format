import '@testing-library/jest-dom';
import { ethers } from 'ethers';
import React from 'react';
import {
  useMint,
  useNFT,
  useRevenueSharingAllocation,
  useSetupRevenueSharing,
  useWithdrawTokenFunds,
} from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Withdraw({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint } = useMint(nft);
  const { withdraw, data: withdrawData } = useWithdrawTokenFunds(nft);

  const account = new ethers.Wallet(
    '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
    new ethers.providers.JsonRpcProvider('http://localhost:8546')
  );

  const onWithdraw = async () => {
    await mint();

    await account.sendTransaction({
      to: nft.address,
      value: '500',
    });

    withdraw(0);
  };

  return (
    <>
      <button data-testid="withdraw" onClick={onWithdraw}>
        Withdraw Token Funds
      </button>
      {withdrawData && <span data-testid="withdrawal"></span>}
    </>
  );
}

function Allocation({ address }: { address: string }) {
  const nft = useNFT(address);
  const { allocate, data: allocationData } = useRevenueSharingAllocation(nft);

  return (
    <>
      <button
        data-testid="allocate"
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
      >
        Allocate Shares
      </button>
      {allocationData && (
        <>
          <span data-testid="allocation"></span>
          <Withdraw address={address} />
        </>
      )}
    </>
  );
}

function Setup({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setup, data: revenueShareData } = useSetupRevenueSharing(nft);

  return (
    <>
      <button
        data-testid="setupRevenueSharing"
        onClick={() => {
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
          });
        }}
      >
        Setup Revenue Sharing
      </button>

      {revenueShareData && (
        <>
          <div data-testid="revenueShareData"></div>
          <Allocation address={address} />
        </>
      )}
    </>
  );
}

describe('useRevenueSharingAllocation', () => {
  it('allows you to allocate shares', async () => {
    render(
      <DeployedTest>
        {({ address }) => <Setup address={address} />}
      </DeployedTest>
    );

    const setup = await waitFor(() =>
      screen.getByTestId('setupRevenueSharing')
    );

    setup.click();
    // @TODO gets stuck here
    await waitFor(() => screen.getByTestId('revenueShareData'));

    screen.getByTestId('allocate').click();
    await waitFor(() => screen.getByTestId('allocation'));

    screen.getByTestId('withdraw').click();
    await waitFor(() => screen.getByTestId('withdrawal'));
  });
});
