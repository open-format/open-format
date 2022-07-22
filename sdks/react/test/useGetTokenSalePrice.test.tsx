import '@testing-library/jest-dom';
import React from 'react';
import { useMint, useNFT, useGetTokenSalePrice } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Get({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data: mintData } = useMint(nft);
  const { data } = useGetTokenSalePrice(nft, 0);

  return (
    <>
      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>

      {mintData && (
        <>
          <span data-testid="mintData"></span>
          {data && <span data-testid="getData"></span>}
        </>
      )}
    </>
  );
}

describe('useGetTokenSalePrice', () => {
  it('allows you to get the token sale price', async () => {
    render(
      <DeployedTest>{({ address }) => <Get address={address} />}</DeployedTest>
    );

    const mintButton = await waitFor(() => screen.getByTestId('mint'));

    mintButton.click();
    await waitFor(() => screen.getByTestId('mintData'));

    await waitFor(() => screen.getByTestId('getData'));
  });
});
