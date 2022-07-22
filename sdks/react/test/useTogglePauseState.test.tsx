import '@testing-library/jest-dom';
import React from 'react';
import { useMint, useNFT, useTogglePauseState } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function Pause({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data: mintData } = useMint(nft);
  const { togglePauseState, data } = useTogglePauseState(nft);

  return (
    <>
      <button data-testid="mint" onClick={() => mint()}>
        Mint
      </button>

      {mintData && (
        <>
          <span data-testid="mintData"></span>
          <button data-testid="toggle" onClick={() => togglePauseState()}>
            Buy
          </button>
        </>
      )}

      {data && <span data-testid="pauseData"></span>}
    </>
  );
}

describe('useTogglePauseState', () => {
  it('allows you to toggle the pause state of a token', async () => {
    render(
      <DeployedTest>
        {({ address }) => <Pause address={address} />}
      </DeployedTest>
    );

    const mintButton = await waitFor(() => screen.getByTestId('mint'));

    mintButton.click();
    await waitFor(() => screen.getByTestId('mintData'));

    screen.getByTestId('toggle').click();
    await waitFor(() => screen.getByTestId('pauseData'));
  });
});
