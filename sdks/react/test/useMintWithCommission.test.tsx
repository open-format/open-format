import '@testing-library/jest-dom';
import { useDeploy, useMintWithCommission } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

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
      {data && <span data-testid="mintData"></span>}
    </>
  );
}

describe('useMintWithCommission', () => {
  it('allows you to mint with commission', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('mint').click();
    await waitFor(() => screen.getByTestId('mintData'));
  });
});
