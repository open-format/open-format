import '@testing-library/jest-dom';
import React from 'react';
import { useMint, useNFT, useGetTokenCreator } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Get({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data: mintData } = useMint(nft);
  const { data } = useGetTokenCreator(nft, 0);

  return (
    <>
      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>

      {mintData && (
        <>
          <span data-testid="mintData"></span>
          {data && <span data-testid="getData">{data}</span>}
        </>
      )}
    </>
  );
}

describe('useGetTokenCreator', () => {
  it('allows you to get the token creator', async () => {
    render(
      <DeployedTest>{({ address }) => <Get address={address} />}</DeployedTest>
    );

    const mintButton = await waitFor(() => screen.getByTestId('mint'));

    mintButton.click();
    await waitFor(() => screen.getByTestId('mintData'));
    await waitFor(() => screen.getByTestId('getData'));

    expect(screen.getByTestId('getData')).toHaveTextContent(
      '0x21b2Be9090D1d319e57B67c4B5d37bc5ec29a9d0'
    );
  });
});
