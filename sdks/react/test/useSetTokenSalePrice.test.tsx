import '@testing-library/jest-dom';
import React from 'react';
import { useMint, useNFT, useSetTokenSalePrice } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Set({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data: mintData } = useMint(nft);
  const { setTokenSalePrice, data } = useSetTokenSalePrice(nft);

  const onSet = async () => {
    await setTokenSalePrice({ tokenId: 0, price: 1000 });
  };

  return (
    <>
      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>

      {mintData && (
        <>
          <span data-testid="mintData"></span>
          <button data-testid="set" onClick={onSet}>
            Set Price
          </button>
        </>
      )}

      {data && <span data-testid="setData"></span>}
    </>
  );
}

describe('useSetTokenSalePrice', () => {
  it('allows you to set the token sale price', async () => {
    render(
      <DeployedTest>{({ address }) => <Set address={address} />}</DeployedTest>
    );

    const mintButton = await waitFor(() => screen.getByTestId('mint'));

    mintButton.click();
    await waitFor(() => screen.getByTestId('mintData'));

    screen.getByTestId('set').click();
    await waitFor(() => screen.getByTestId('setData'));
  });
});
