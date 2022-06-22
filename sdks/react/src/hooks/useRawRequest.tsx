import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Performs a custom query against the subgraph
 * @param {{ query: string }} options - a GraphQL query
 * @returns data from the subgraph
 */
export function useRawRequest({
  query: rawQuery,
  variables,
}: {
  query: string;
  variables?: {
    [key: string]: any;
  };
}) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['raw-request', rawQuery], () =>
    sdk.rawRequest(rawQuery, variables)
  );

  return query;
}
