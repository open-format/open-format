import { OpenFormatSDK } from '../src/index';
import { gql } from 'graphql-request';

const sdk = new OpenFormatSDK();

describe('subgraph', () => {
  it('allows you to perform a raw request', async () => {
    const query = gql`
      {
        tokens {
          id
        }
      }
    `;

    const result = await sdk.rawRequest(query);

    expect(typeof result.tokens[0].id).toBe('string');
  });
});
