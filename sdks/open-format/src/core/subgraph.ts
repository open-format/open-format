import { request, RequestDocument, Variables } from 'graphql-request';

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
async function rawRequest<T = any, V = Variables>(
  document: RequestDocument,
  variables?: V
) {
  return await request<T, V>(ENDPOINT, document, variables);
}

export default {
  rawRequest,
};
