import { gql, request, RequestDocument, Variables } from 'graphql-request';
import { SaleDataResponse, TokensResponse } from '../types';

const ENDPOINT =
  'https://api.thegraph.com/subgraphs/name/simpleweb/open-format';

/**
 * Makes a raw request to the Open Format subgraph allowing you to pass your own
 * Query or Mutation
 * @param document
 * @returns a result from the subgraph
 *
 * @example
 * ```
 * rawRequest(gql`{ tokens { id } }`)
 * ```
 */
export async function rawRequest<T = any, V = Variables>(
  document: RequestDocument,
  variables?: V
) {
  return await request<T, V>(ENDPOINT, document, variables);
}

/**
 * Gets sales data for a specific token
 * @param tokenId - id of the token
 * @returns sales data for a token
 *
 * @example
 * ```
 * getSaleDataForToken('0x...')
 * ```
 */
export async function getSaleDataForToken(tokenId: string) {
  const query = gql`
    query getSaleDataForToken($id: String!) {
      token(id: $id) {
        saleData {
          id
          maxSupply
          totalEarnings
          totalSold
          totalReleased
          salePrice
          createdAt
          royaltiesPercentage
          primaryCommission
          secondaryCommission
        }
      }
    }
  `;

  return await request<SaleDataResponse, { id: string }>(ENDPOINT, query, {
    id: tokenId,
  });
}

export async function getTokens({ factoryId }: { factoryId: string }) {
  const query = gql`
    query getTokensByFactoryID($factory_id: String) {
      tokens(where: { factory_id: $factory_id }) {
        id
        symbol
        creator {
          id
        }
        properties {
          id
          key
          value
        }
        release_type
        createdAt
      }
    }
  `;

  return await request<TokensResponse, { factory_id: string }>(
    ENDPOINT,
    query,
    {
      factory_id: factoryId,
    }
  );
}
