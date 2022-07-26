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
            '0xf9D93537eC4c68ea7FDd841f17f2Df78204a21ff'
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
