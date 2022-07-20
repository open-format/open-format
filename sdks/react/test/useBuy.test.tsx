import '@testing-library/jest-dom';
import {
  useDeploy,
  useMint,
  useSetTokenSalePrice,
  useBuy,
  useNFT,
} from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

function Buy({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data: mintData } = useMint(nft);
  const { setTokenSalePrice } = useSetTokenSalePrice();
  const { buy, data } = useBuy();

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

function Test() {
  const { deploy, data: deployData } = useDeploy();

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

      {deployData && (
        <>
          <Buy address={deployData.contractAddress} />
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
