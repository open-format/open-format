import '@testing-library/jest-dom';
import { ethers } from 'ethers';
import React from 'react';
import {
  useGetTokenBalance,
  useMint,
  useNFT,
  useRevenueSharingAllocation,
  useSetupRevenueSharing,
} from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Balance({ address }: { address: string }) {
  const nft = useNFT(address);
  const { data: balanceData } = useGetTokenBalance(nft, 0);

  return <>{balanceData && <span data-testid="balance"></span>}</>;
}

function Transact({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint } = useMint(nft);
  const [complete, setCompletion] = React.useState(false);

  const account = new ethers.Wallet(
    '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
    new ethers.providers.JsonRpcProvider('http://localhost:8546')
  );

  const onTransact = async () => {
    await mint();

    await account.sendTransaction({
      to: nft.address,
      value: '500',
    });

    setCompletion(true);
  };

  return (
    <>
      <button data-testid="transact" onClick={onTransact}>
        Transact
      </button>

      {complete && (
        <>
          <span data-testid="transacted"></span>
          <Balance address={address} />
        </>
      )}
    </>
  );
}

function Allocation({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setup, data: revenueShareData } = useSetupRevenueSharing(nft);
  const { allocate, data: allocationData } = useRevenueSharingAllocation(nft);

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

      {revenueShareData && <div data-testid="revenueShareData"></div>}

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
          <Transact address={address} />
        </>
      )}
    </>
  );
}

describe('useGetTokenBalance', () => {
  it('allows you to get the balance of a token', async () => {
    render(
      <DeployedTest>
        {({ address }) => <Allocation address={address} />}
      </DeployedTest>
    );

    const setupButton = await waitFor(() =>
      screen.getByTestId('setupRevenueSharing')
    );

    setupButton.click();
    await waitFor(() => screen.getByTestId('revenueShareData'));

    screen.getByTestId('allocate').click();
    await waitFor(() => screen.getByTestId('allocation'));

    // @TODO this test seems to get stuck here, regardless of the refactor, needs investigating
    screen.getByTestId('transact').click();
    await waitFor(() => screen.getByTestId('transacted'));

    await waitFor(() => screen.getByTestId('balance'));
  });
});
