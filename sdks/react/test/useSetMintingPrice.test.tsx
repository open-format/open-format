import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useSetMintingPrice } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Set({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setMintingPrice, data: mintingPriceData } = useSetMintingPrice(nft);

  return (
    <>
      <button
        data-testid="setMintingPrice"
        onClick={() => {
          setMintingPrice(1000);
        }}
      >
        Set Minting Price
      </button>

      {mintingPriceData && (
        <span data-testid="status">{mintingPriceData.status}</span>
      )}
    </>
  );
}

describe('useSetMintingPrice', () => {
  it('allows you to set minting price', async () => {
    render(
      <DeployedTest>{({ address }) => <Set address={address} />}</DeployedTest>
    );

    const set = await waitFor(() => screen.getByTestId('setMintingPrice'));

    set.click();
    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBe('1');
  });
});
