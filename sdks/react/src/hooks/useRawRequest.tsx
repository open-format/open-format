import { useQuery, UseQueryOptions } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Performs a custom query against the subgraph
 * @param {{ query: string }} options - a GraphQL query
 * @returns data from the subgraph
 */
export function useRawRequest<TQueryFnData, TError, TData = TQueryFnData>({
  query: rawQuery,
  variables,
  config,
}: {
  query: string;
  variables?: {
    [key: string]: any;
  };
  config?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData>,
    'queryKey' | 'queryFn'
  >;
}) {
  const { sdk } = useOpenFormat();

  const query = useQuery(
    ['raw-request', rawQuery],
    () => sdk.rawRequest(rawQuery, variables),
    config
  );

  return query;
}
