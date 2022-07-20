import React from 'react';
import '@testing-library/jest-dom';
import { useDeploy, useMint, useNFT } from '../src/hooks';
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

      {data && (
        <>
          <span data-testid="status">{data.status}</span>
          <Mint address={data.contractAddress} />
        </>
      )}
    </>
  );
}

function Mint({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint, data } = useMint(nft);
  return (
    <>
      <button onClick={() => mint()} data-testid="mint">
        Mint
      </button>
      {data && <span data-testid="receipt">{data.status}</span>}
    </>
  );
}

describe('useMint', () => {
  it('allows you to mint a deployed Open Format contract', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();

    const status = await waitFor(() => screen.getByTestId('status'));
    expect(status).toHaveTextContent('1');

    const mintButton = await waitFor(() => screen.getByTestId('mint'));
    mintButton.click();

    const receipt = await waitFor(() => screen.getByTestId('receipt'));
    expect(receipt).toHaveTextContent('1');
  });
});
