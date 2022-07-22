import '@testing-library/jest-dom';
import React from 'react';
import { BigNumber } from 'ethers';
import { useNFT, useGetMaxSupply } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Get({ address }: { address: string }) {
  const nft = useNFT(address);
  const { data, isSuccess } = useGetMaxSupply(nft);

  return (
    <>{isSuccess && <span data-testid="status">{data.toString()}</span>}</>
  );
}

describe('useGetMaxSupply', () => {
  it('allows you to get max supply', async () => {
    render(
      <DeployedTest>{({ address }) => <Get address={address} />}</DeployedTest>
    );

    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBeInstanceOf(BigNumber);
  });
});
