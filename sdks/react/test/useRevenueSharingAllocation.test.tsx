import '@testing-library/jest-dom';
import React from 'react';
import {
  useNFT,
  useRevenueSharingAllocation,
  useSetupRevenueSharing,
} from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

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

      {allocationData && <span data-testid="allocation"></span>}
    </>
  );
}

describe('useRevenueSharingAllocation', () => {
  it('allows you to allocate shares', async () => {
    render(
      <DeployedTest>
        {({ address }) => <Allocation address={address} />}
      </DeployedTest>
    );

    const setup = await waitFor(() =>
      screen.getByTestId('setupRevenueSharing')
    );

    setup.click();
    await waitFor(() => screen.getByTestId('revenueShareData'));

    screen.getByTestId('allocate').click();
    await waitFor(() => screen.getByTestId('allocation'));
  });
});
