import '@testing-library/jest-dom';
import React from 'react';
import { useBuy, useMint, useNFT, useSetTokenSalePrice } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Buy({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data: mintData } = useMint(nft);
  const { setTokenSalePrice } = useSetTokenSalePrice(nft);
  const { buy, data } = useBuy(nft);

  const onBuy = async () => {
    await setTokenSalePrice({ tokenId: 0, price: 1000 });

    await buy(0);
  };

  return (
    <>
      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>

      {mintData && (
        <>
          <span data-testid="mintData"></span>
          <button data-testid="buy" onClick={onBuy}>
            Buy
          </button>
        </>
      )}

      {data && <span data-testid="buyData"></span>}
    </>
  );
}

describe('useBuy', () => {
  it('allows you to buy', async () => {
    render(
      <DeployedTest>{({ address }) => <Buy address={address} />}</DeployedTest>
    );

    const mintButton = await waitFor(() => screen.getByTestId('mint'));

    mintButton.click();
    await waitFor(() => screen.getByTestId('mintData'));

    screen.getByTestId('buy').click();
    await waitFor(() => screen.getByTestId('buyData'));
  });
});
