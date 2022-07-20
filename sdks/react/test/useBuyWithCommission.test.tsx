import '@testing-library/jest-dom';
import React from 'react';
import {
  useBuyWithCommission,
  useMintWithCommission,
  useNFT,
  useSetTokenSalePrice,
} from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Buy({ address }: { address: string }) {
  const nft = useNFT(address);
  const { setTokenSalePrice } = useSetTokenSalePrice(nft);
  const { buyWithCommission, data: buyData } = useBuyWithCommission(nft);
  const { mintWithCommission, data: mintData } = useMintWithCommission(nft);

  const onBuy = async () => {
    await setTokenSalePrice({ tokenId: 0, price: 1000 });

    await buyWithCommission({
      tokenId: 0,
      address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
    });
  };

  return (
    <>
      <button
        data-testid="mint"
        onClick={() =>
          mintWithCommission('0xee4abd006630aea6fa3e685c99506db31c09b3f4')
        }
      >
        Mint With Commission
      </button>

      <button data-testid="buy" onClick={onBuy}>
        Buy With Commission
      </button>

      {mintData && <span data-testid="mintData"></span>}
      {buyData && <span data-testid="buyData"></span>}
    </>
  );
}

describe('useBuyWithCommission', () => {
  it('allows you to buy with commission', async () => {
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
