import '@testing-library/jest-dom';
import { render, screen, waitFor } from '../src/utilities';
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

  it('allows you to pass variables to a query', async () => {
    render(<TestConfig />);

    await waitFor(() => {
      screen.getByTestId('tokenId');
      screen.getByTestId('success');
    });

    expect(screen.getByTestId('tokenId')).toHaveTextContent(/0x/);
    expect(screen.getByTestId('success')).toBeVisible();
  });
});

function TestConfig() {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const { data } = useRawRequest<any, any, any>({
    query: gql`
      {
        tokens {
          id
        }
      }
    `,
    config: {
      onSuccess: () => setShowSuccess(true),
    },
  });

  return (
    <>
      {data && <span data-testid="tokenId">{data?.tokens?.[0]?.id}</span>}
      {showSuccess && <span data-testid="success">Success!</span>}
    </>
  );
}

function TestVariables() {
  const { data } = useRawRequest<any, any, any>({
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
  const { data } = useRawRequest<any, any, any>({
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
