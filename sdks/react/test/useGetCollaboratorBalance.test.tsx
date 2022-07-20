import '@testing-library/jest-dom';
import React from 'react';
import {
  useGetCollaboratorBalance,
  useMint,
  useNFT,
  useRevenueSharingAllocation,
  useSetupRevenueSharing,
} from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Balance({ address }: { address: string }) {
  const nft = useNFT(address);
  const { data: balanceData } = useGetCollaboratorBalance(
    nft,
    '0xee4abd006630aea6fa3e685c99506db31c09b3f4'
  );

  return <>{balanceData && <span data-testid="balance"></span>}</>;
}

function Mint({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data } = useMint(nft);

  return (
    <>
      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>

      {data && (
        <>
          <span data-testid="minted"></span>
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
          <Mint address={address} />
        </>
      )}
    </>
  );
}

describe('useGetCollaboratorBalance', () => {
  it('allows you to get the balance of a collaborator', async () => {
    render(
      <DeployedTest>
        {({ address }) => <Allocation address={address} />}
      </DeployedTest>
    );

    const revenueSharingButton = await waitFor(() =>
      screen.getByTestId('setupRevenueSharing')
    );

    revenueSharingButton.click();
    await waitFor(() => screen.getByTestId('revenueShareData'));

    screen.getByTestId('allocate').click();
    await waitFor(() => screen.getByTestId('allocation'));

    screen.getByTestId('mint').click();
    await waitFor(() => screen.getByTestId('minted'));

    await waitFor(() => screen.getByTestId('balance'));
  });
});
