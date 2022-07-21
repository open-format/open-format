import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useSetSecondaryCommissionPercentage } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function SetSecondary({ address }: { address: string }) {
  const nft = useNFT(address);
  const {
    setSecondaryCommissionPercentage,
    data: secondaryCommissionData,
  } = useSetSecondaryCommissionPercentage(nft);

  return (
    <>
      <button
        data-testid="setSecondaryCommissionPercentage"
        onClick={() => {
          setSecondaryCommissionPercentage(500);
        }}
      >
        Set Secondary Commission Percent
      </button>

      {secondaryCommissionData && (
        <span data-testid="status">{secondaryCommissionData.status}</span>
      )}
    </>
  );
}

describe('useSetSecondaryCommissionPercentage', () => {
  it('allows you to set secondary commission percentage', async () => {
    render(
      <DeployedTest>
        {({ address }) => <SetSecondary address={address} />}
      </DeployedTest>
    );

    const set = await waitFor(() =>
      screen.getByTestId('setSecondaryCommissionPercentage')
    );

    set.click();
    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBe('1');
  });
});
