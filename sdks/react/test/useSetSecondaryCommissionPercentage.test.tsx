import React from 'react';
import '@testing-library/jest-dom';
import { useDeploy, useSetSecondaryCommissionPercentage } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';

function Test() {
  const { deploy, data: deployData } = useDeploy();
  const {
    setSecondaryCommissionPercentage,
    data: secondaryCommissionData,
  } = useSetSecondaryCommissionPercentage();

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
        data-testid="setSecondaryCommissionPercentage"
        onClick={() => {
          setSecondaryCommissionPercentage(500);
        }}
      >
        set Secondary Commission Percentage
      </button>

      {secondaryCommissionData && (
        <span data-testid="status">{secondaryCommissionData.status}</span>
      )}
    </>
  );
}

describe('useSetSecondaryCommissionPercentage', () => {
  it('allows you to set secondary commission percentage', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('setSecondaryCommissionPercentage').click();
    await waitFor(() => screen.getByTestId('status'));

    expect(screen.getByTestId('status').innerHTML).toBe('1');
  });
});
