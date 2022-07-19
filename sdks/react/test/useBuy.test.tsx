import '@testing-library/jest-dom';
import { useDeploy, useMint, useSetTokenSalePrice, useBuy } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

function Buy() {
  const { setTokenSalePrice } = useSetTokenSalePrice();
  const { buy, data } = useBuy();

  const onBuy = async () => {
    await setTokenSalePrice({ tokenId: 0, price: 1000 });

    await buy(0);
  };

  return (
    <>
      <button data-testid="buy" onClick={onBuy}>
        Buy
      </button>
      {data && <span data-testid="buyData"></span>}
    </>
  );
}

function Test() {
  const { deploy, data: deployData } = useDeploy();
  const { mint, data } = useMint();

  return (
    <>
      <button
        data-testid="deploy"
        onClick={() => {
          deploy({
            maxSupply: 100,
            mintingPrice: 0.01,
            name: 'Test',
            symbol: 'TEST',
            url: 'ipfs://',
          });
        }}
      >
        Deploy
      </button>
      {deployData && <div data-testid="deployData"></div>}

      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>
      {data && (
        <>
          <span data-testid="mintData"></span>
          <Buy />
        </>
      )}
    </>
  );
}

describe('useBuy', () => {
  it('allows you to buy', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('mint').click();
    await waitFor(() => screen.getByTestId('mintData'));

    screen.getByTestId('buy').click();
    await waitFor(() => screen.getByTestId('buyData'));
  });
});