import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useSetupRevenueSharing } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function SetupSharing({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setup, data: setupRevenueShareData } = useSetupRevenueSharing(nft);

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
                share: 500,
              },
              {
                address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
                share: 500,
              },
            ],
            holderPercentage: 5000,
          });
        }}
      >
        Setup Revenue Sharing
      </button>

      {setupRevenueShareData && <div data-testid="setupRevenueShareData"></div>}
    </>
  );
}

describe('useSetupRevenueSharing', () => {
  it('allows you to setup revenue sharing', async () => {
    render(
      <DeployedTest>
        {({ address }) => <SetupSharing address={address} />}
      </DeployedTest>
    );

    const setup = await waitFor(() =>
      screen.getByTestId('setupRevenueSharing')
    );

    setup.click();
    await waitFor(() => screen.getByTestId('setupRevenueShareData'));
  });
});
