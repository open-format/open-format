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

  it('gets sale data for a token', async () => {
    const result = await sdk.getSaleDataForToken(
      '0x0667c3fa16ea85166e1d7fbe6da14031c6b541a1'
    );

    expect(result.token?.saleData.id).toBeTruthy();
    expect(result.token?.saleData.maxSupply).toBeTruthy();
    expect(result.token?.saleData.totalEarnings).toBeTruthy();
    expect(result.token?.saleData.totalSold).toBeTruthy();
    expect(result.token?.saleData.totalReleased).toBeTruthy();
    expect(result.token?.saleData.salePrice).toBeTruthy();
    expect(result.token?.saleData.createdAt).toBeTruthy();
    expect(result.token?.saleData.royaltiesPercentage).toBeTruthy();
    expect(result.token?.saleData.primaryCommission).toBeTruthy();
    expect(result.token?.saleData.secondaryCommission).toBeTruthy();
  });
});
