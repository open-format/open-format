import '@testing-library/jest-dom';
import { useSaleData } from '../src/hooks';
import { render, screen, waitFor } from './utilities';
import React from 'react';

function Test() {
  const { data } = useSaleData({
    tokenId: '0x0667c3fa16ea85166e1d7fbe6da14031c6b541a1',
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
      '0x0667c3fa16ea85166e1d7fbe6da14031c6b541a1'
    );
  });
});
