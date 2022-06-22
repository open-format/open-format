import '@testing-library/jest-dom';
import { render, screen, waitFor } from './utilities';
import { useRawRequest } from '../src/hooks';
import { gql } from 'graphql-request';
import React from 'react';

describe('useRawRequest', () => {
  it('allows you to make a custom request', async () => {
    render(<Test />);

    await waitFor(() => screen.getByTestId('tokenId'));

    expect(screen.getByTestId('tokenId')).toHaveTextContent(/0x/);
  });

  it('allows you to pass variables to a query', async () => {
    render(<TestVariables />);

    await waitFor(() => screen.getByTestId('tokenId'));

    expect(screen.getByTestId('tokenId')).toHaveTextContent(
      '0x0667c3fa16ea85166e1d7fbe6da14031c6b541a1'
    );
  });
});

function TestVariables() {
  const { data } = useRawRequest({
    query: gql`
      query GetToken($id: String!) {
        token(id: $id) {
          id
        }
      }
    `,
    variables: {
      id: '0x0667c3fa16ea85166e1d7fbe6da14031c6b541a1',
    },
  });

  return <>{data && <span data-testid="tokenId">{data?.token?.id}</span>}</>;
}

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
