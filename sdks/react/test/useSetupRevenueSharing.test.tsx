import '@testing-library/jest-dom';
import { useDeploy, useSetupRevenueSharing } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

function Test() {
  const { deploy, data: deployData } = useDeploy();
  const { setup, data: setupRevenueShareData } = useSetupRevenueSharing();

  return (
    <>
      <button
        data-testid="deploy"
        onClick={() => {
          deploy({
            maxSupply: 100,
            mintingPrice: 0.01,
            name: 'Test',
            symbol: 'TEST',
            url: 'ipfs://',
          });
        }}
      >
        Deploy
      </button>

      {deployData && <div data-testid="deployData"></div>}

      <button
        data-testid="setupRevenueSharing"
        onClick={() => {
          setup({
            revShareExtensionAddress:
              '0x483C3aDD26C87d2F99DcCB84Cbf61844B6aeD212',
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
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('setupRevenueSharing').click();
    await waitFor(() => screen.getByTestId('setupRevenueShareData'));
  });
});
