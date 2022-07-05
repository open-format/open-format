import React from 'react';
import '@testing-library/jest-dom';
import { useTokens } from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';

function Test() {
  const { data } = useTokens();

  return (
    <>{data && <span data-testid="tokenId">{data?.tokens?.[0].id}</span>}</>
  );
}

describe('useTokens', () => {
  it('allows you to load token data from a given factory', async () => {
    render(<Test />);

    await waitFor(() => screen.getByTestId('tokenId'));

    expect(screen.getByTestId('tokenId')).toBeTruthy();
  });
});
