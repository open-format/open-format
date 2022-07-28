import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Hook to get token data
 * @returns {UseQueryResult}
 */
export function useTokens() {
  const { sdk } = useOpenFormat();

  const query = useQuery(['tokens', sdk.options.factory], () =>
    sdk.getTokens()
  );

  return query;
}
