import { OpenFormatSDK } from '../src/index';
import { gql } from 'graphql-request';

describe('subgraph', () => {
  it('allows you to perform a raw request', async () => {
    const sdk = new OpenFormatSDK();

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
    const sdk = new OpenFormatSDK();

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

  it('get tokens for a factory', async () => {
    const sdk = new OpenFormatSDK({
      factory: '1fe0b323-223f-48aa-8797-137931473f49',
      network: 'localhost',
    });

    const result = await sdk.getTokens();

    expect(result.tokens[0].id).toBeTruthy();
  });
});
