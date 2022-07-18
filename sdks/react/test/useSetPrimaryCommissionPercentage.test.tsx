import React from 'react';
import '@testing-library/jest-dom';
import { useDeploy, useSetPrimaryCommissionPercentage } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';

function Test() {
  const { deploy, data: deployData } = useDeploy();
  const {
    setPrimaryCommissionPercent,
    data: primaryCommissionData,
  } = useSetPrimaryCommissionPercentage();

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
        data-testid="setPrimaryCommissionPercent"
        onClick={() => {
          setPrimaryCommissionPercent(500);
        }}
      >
        Set royalties
      </button>

      {primaryCommissionData && (
        <span data-testid="status">{primaryCommissionData.status}</span>
      )}
    </>
  );
}

describe('useSetPrimaryCommissionPercentage', () => {
  it('allows you to set primary commission percentage', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('setPrimaryCommissionPercent').click();
    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBe('1');
  });
});
