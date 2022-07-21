import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useSetMaxSupply } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Set({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setMaxSupply, data: supplyData } = useSetMaxSupply(nft);

  return (
    <>
      <button
        data-testid="setMaxSupply"
        onClick={() => {
          setMaxSupply(500);
        }}
      >
        Set Max Supply
      </button>

      {supplyData && <span data-testid="status">{supplyData.status}</span>}
    </>
  );
}

describe('useSetMaxSupply', () => {
  it('allows you to set max supply', async () => {
    render(
      <DeployedTest>{({ address }) => <Set address={address} />}</DeployedTest>
    );

    const set = await waitFor(() => screen.getByTestId('setMaxSupply'));

    set.click();
    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBe('1');
  });
});
