import React from 'react';
import '@testing-library/jest-dom';
import { useDeploy } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';

function Test() {
  const { data, deploy } = useDeploy();

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

      {data && <span data-testid="tokenId">{data?.status}</span>}
    </>
  );
}

describe('useDeploy', () => {
  it('allows you to deploy a version of the contract', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('tokenId'));

    expect(screen.getByTestId('tokenId')).toBeTruthy();
  });
});
