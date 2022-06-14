import '@testing-library/jest-dom';
import { useSaleData } from '../src/hooks';
import { render, screen, waitFor } from './utilities';
import React from 'react';

function Test() {
  const { data } = useSaleData({
    tokenId: '0x021d35cd4849596f1013cf92f718ec7bf5541bc2',
  });

  return (
    <>{data && <span data-testid="tokenId">{data?.token?.saleData.id}</span>}</>
  );
}

describe('useSaleData', () => {
  it('allows you to load sale data', async () => {
    render(<Test />);

    await waitFor(() => screen.getByTestId('tokenId'));

    expect(screen.getByTestId('tokenId')).toHaveTextContent(
      '0x021d35cd4849596f1013cf92f718ec7bf5541bc2'
    );
  });
});
