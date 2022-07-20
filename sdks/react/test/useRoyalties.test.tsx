import '@testing-library/jest-dom';
import React from 'react';
import { useNFT, useRoyalties, useSetRoyalties } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function GetRoyalties({ address }: { address: string }) {
  const nft = useNFT(address);
  const { data: royaltiesData } = useRoyalties(nft, 500);

  return (
    <>
      {royaltiesData && <span data-testid="royalties">{royaltiesData[0]}</span>}
    </>
  );
}

function Royalties({ address }: { address: string }) {
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

      {royaltyData && (
        <>
          <span data-testid="status">{royaltyData.status}</span>{' '}
          <GetRoyalties address={address} />
        </>
      )}
    </>
  );
}

describe('useRoyalties', () => {
  it('allows you to get royalties', async () => {
    render(
      <DeployedTest>
        {({ address }) => <Royalties address={address} />}
      </DeployedTest>
    );

    const royalties = await waitFor(() => screen.getByTestId('setRoyalties'));

    royalties.click();
    await waitFor(() => screen.getByTestId('status'));

    await waitFor(() => screen.getByTestId('royalties'));

    expect(screen.getByTestId('royalties')).toHaveTextContent(
      '0xee4aBD006630AEa6fA3E685c99506DB31c09b3F4'
    );
  });
});
