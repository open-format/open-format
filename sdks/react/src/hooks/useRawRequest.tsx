import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

export function useRawRequest({ query: rawQuery }: { query: string }) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['raw-request', rawQuery], () =>
    sdk.rawRequest(rawQuery)
  );

  return query;
}
