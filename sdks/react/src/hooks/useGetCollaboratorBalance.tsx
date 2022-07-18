import { useQuery } from 'react-query';
import { useOpenFormat } from '../provider';

/**
 * Hook to get balance for a collaborator
 * @param {{ address: string }} address - Address for collaborator
 * @returns BigNumber
 */
export function useGetCollaboratorBalance(address: string) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['getCollaboratorBalance', address], () =>
    sdk.getCollaboratorBalance(address)
  );

  return query;
}
