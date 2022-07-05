import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Get token data
 * @returns tokens for a given factory
 */
export function useTokens() {
  const { sdk } = useOpenFormat();

  const query = useQuery(['tokens', sdk.options.factory], () =>
    sdk.getTokens()
  );

  return query;
}
