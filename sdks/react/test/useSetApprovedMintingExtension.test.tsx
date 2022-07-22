import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useSetApprovedMintingExtension } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Set({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setApprovedMintingExtension, data } = useSetApprovedMintingExtension(
    nft
  );

  return (
    <>
      <button
        data-testid="setApprovedMintingExtension"
        onClick={() => {
          setApprovedMintingExtension(
            // Replace this with the correct address
            '0x0000000000000000000000000000000000000000'
          );
        }}
      >
        Setup Revenue Sharing
      </button>

      {data && <div data-testid="approvedMintingExtensionData"></div>}
    </>
  );
}

describe('useSetApprovedMintingExtension', () => {
  it('allows you to set the approved minting extension', async () => {
    render(
      <DeployedTest>{({ address }) => <Set address={address} />}</DeployedTest>
    );

    const set = await waitFor(() =>
      screen.getByTestId('setApprovedMintingExtension')
    );

    set.click();
    await waitFor(() => screen.getByTestId('approvedMintingExtensionData'));
  });
});
