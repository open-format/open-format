import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useSetRoyalties } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function SetRoyalties({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setRoyalties, data: royaltyData } = useSetRoyalties(nft);
  return (
    <>
      <button
        data-testid="setRoyalties"
        onClick={() => {
          setRoyalties({
            royaltyPercentage: 500,
            royaltyReceiverAddress:
              '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
          });
        }}
      >
        Set royalties
      </button>

      {royaltyData && <span data-testid="status">{royaltyData.status}</span>}
    </>
  );
}

describe('useSetRoyalties', () => {
  it('allows you to set royalties', async () => {
    render(
      <DeployedTest>
        {({ address }) => <SetRoyalties address={address} />}
      </DeployedTest>
    );

    const set = await waitFor(() => screen.getByTestId('setRoyalties'));

    set.click();
    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBe('1');
  });
});
