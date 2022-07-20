import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useSetPrimaryCommissionPercentage } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function SetCommission({ address }: { address: string }) {
  const nft = useNFT(address);
  const {
    setPrimaryCommissionPercent,
    data: primaryCommissionData,
  } = useSetPrimaryCommissionPercentage(nft);

  return (
    <>
      <button
        data-testid="setPrimaryCommissionPercent"
        onClick={() => {
          setPrimaryCommissionPercent(500);
        }}
      >
        Set Primary Commission Percent
      </button>

      {primaryCommissionData && (
        <span data-testid="status">{primaryCommissionData.status}</span>
      )}
    </>
  );
}

describe('useSetPrimaryCommissionPercentage', () => {
  it('allows you to set primary commission percentage', async () => {
    render(
      <DeployedTest>
        {({ address }) => <SetCommission address={address} />}
      </DeployedTest>
    );

    const set = await waitFor(() =>
      screen.getByTestId('setPrimaryCommissionPercent')
    );

    set.click();
    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBe('1');
  });
});
