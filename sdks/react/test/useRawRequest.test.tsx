import '@testing-library/jest-dom';
import { render, screen, waitFor } from './utilities';
import { useRawRequest } from '../src/hooks';
import { gql } from 'graphql-request';
import React from 'react';

function Test() {
  const { data } = useRawRequest({
    query: gql`
      {
        tokens {
          id
        }
      }
    `,
  });
  return (
    <>{data && <span data-testid="tokenId">{data?.tokens?.[0]?.id}</span>}</>
  );
}

describe('useRawRequest', () => {
  it('allows you to make a custom request', async () => {
    render(<Test />);

    await waitFor(() => screen.getByTestId('tokenId'));

    expect(screen.getByTestId('tokenId')).toHaveTextContent(/0x/);
  });
});
