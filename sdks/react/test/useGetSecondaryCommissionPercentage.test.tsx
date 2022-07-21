import '@testing-library/jest-dom';
import React from 'react';
import { BigNumber } from 'ethers';
import { useNFT, useGetSecondaryCommissionPercent } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function GetCommission({ address }: { address: string }) {
  const nft = useNFT(address);
  const { data, isSuccess } = useGetSecondaryCommissionPercent(nft);

  return (
    <>{isSuccess && <span data-testid="status">{data.toString()}</span>}</>
  );
}

describe('useGetSecondaryCommissionPercentage', () => {
  it('allows you to get secondary commission percentage', async () => {
    render(
      <DeployedTest>
        {({ address }) => <GetCommission address={address} />}
      </DeployedTest>
    );

    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBeInstanceOf(BigNumber);
  });
});
