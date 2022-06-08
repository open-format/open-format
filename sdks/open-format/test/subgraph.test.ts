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

  it('allows you to perform a raw request', async () => {
    const result = await sdk.getSaleDataForToken(
      '0x021d35cd4849596f1013cf92f718ec7bf5541bc2'
    );

    expect(result.token.saleData.id).toBeTruthy();
    expect(result.token.saleData.maxSupply).toBeTruthy();
    expect(result.token.saleData.totalEarnings).toBeTruthy();
    expect(result.token.saleData.totalSold).toBeTruthy();
    expect(result.token.saleData.totalReleased).toBeTruthy();
    expect(result.token.saleData.salePrice).toBeTruthy();
    expect(result.token.saleData.createdAt).toBeTruthy();
    expect(result.token.saleData.royaltiesPercentage).toBeTruthy();
    expect(result.token.saleData.primaryCommission).toBeTruthy();
    expect(result.token.saleData.secondaryCommission).toBeTruthy();
  });
});
