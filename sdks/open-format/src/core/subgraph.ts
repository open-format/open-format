import { request, RequestDocument, Variables } from 'graphql-request';

const ENDPOINT =
  'https://api.thegraph.com/subgraphs/name/simpleweb/open-format';

/**
 * Makes a request to the Open Format subgraph
 * @param document
 * @returns a result from the subgraph
 *
 * @example
 * ```
 * raw(gql`{ tokens { id } }`)
 * ```
 */
async function raw<T = any, V = Variables>(
  document: RequestDocument,
  variables?: V
) {
  return await request<T, V>(ENDPOINT, document, variables);
}

export default {
  raw,
};
