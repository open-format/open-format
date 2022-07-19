import '@testing-library/jest-dom';
import {
  useDeploy,
  useMintWithCommission,
  useSetTokenSalePrice,
  useBuyWithCommission,
} from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

function Buy() {
  const { setTokenSalePrice } = useSetTokenSalePrice();
  const { buyWithCommission, data } = useBuyWithCommission();

  const onBuy = async () => {
    await setTokenSalePrice({ tokenId: 0, price: 1000 });

    await buyWithCommission({
      tokenId: 0,
      address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
    });
  };

  return (
    <>
      <button data-testid="buy" onClick={onBuy}>
        Buy With Commission
      </button>
      {data && <span data-testid="buyData"></span>}
    </>
  );
}

function Test() {
  const { deploy, data: deployData } = useDeploy();
  const { mintWithCommission, data } = useMintWithCommission();

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

      <button
        data-testid="mint"
        onClick={() =>
          mintWithCommission('0xee4abd006630aea6fa3e685c99506db31c09b3f4')
        }
      >
        Mint With Commission
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

describe('useBuyWithCommission', () => {
  it('allows you to buy with commission', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('mint').click();
    await waitFor(() => screen.getByTestId('mintData'));

    screen.getByTestId('buy').click();
    await waitFor(() => screen.getByTestId('buyData'));
  });
});
