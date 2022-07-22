import '@testing-library/jest-dom';
import React from 'react';
import { useMint, useNFT, useBurn } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Burn({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data: mintData } = useMint(nft);
  const { burn, data } = useBurn(nft);

  return (
    <>
      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>

      {mintData && (
        <>
          <span data-testid="mintData"></span>
          <button data-testid="burn" onClick={() => burn(0)}>
            Buy
          </button>
        </>
      )}

      {data && <span data-testid="burnData"></span>}
    </>
  );
}

describe('useBurn', () => {
  it('allows you to burn a token', async () => {
    render(
      <DeployedTest>{({ address }) => <Burn address={address} />}</DeployedTest>
    );

    const mintButton = await waitFor(() => screen.getByTestId('mint'));

    mintButton.click();
    await waitFor(() => screen.getByTestId('mintData'));

    screen.getByTestId('burn').click();
    await waitFor(() => screen.getByTestId('burnData'));
  });
});
