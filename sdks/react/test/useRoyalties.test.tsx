import '@testing-library/jest-dom';
import { useDeploy, useRoyalties, useSetRoyalties } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

function Royalties() {
  const { data: royaltiesData } = useRoyalties({ salePrice: 500 });

  return (
    <>
      {royaltiesData && <span data-testid="royalties">{royaltiesData[0]}</span>}
    </>
  );
}

function Test() {
  const { deploy, data: deployData } = useDeploy();
  const { setRoyalties, data: royaltyData } = useSetRoyalties();

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
        data-testid="setRoyalties"
        onClick={() => {
          setRoyalties({
            royaltyPercentage: 500,
            royaltyReceiverAddress:
              '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
          });
        }}
      >
        Set royalties
      </button>

      {royaltyData && (
        <>
          <span data-testid="status">{royaltyData.status}</span>
          <Royalties />
        </>
      )}
    </>
  );
}

describe('useRoyalties', () => {
  it('allows you to get royalties', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('setRoyalties').click();
    await waitFor(() => screen.getByTestId('status'));

    await waitFor(() => screen.getByTestId('royalties'));

    expect(screen.getByTestId('royalties')).toHaveTextContent(
      '0xee4aBD006630AEa6fA3E685c99506DB31c09b3F4'
    );
  });
});
