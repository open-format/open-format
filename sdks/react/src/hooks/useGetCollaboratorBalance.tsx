import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from 'react-query';

/**
 * Hook to get balance for a collaborator
 * @param {{ address: string }} address - Address for collaborator
 * @returns BigNumber
 */
export function useGetCollaboratorBalance(nft: OpenFormatNFT, address: string) {
  const query = useQuery(['getCollaboratorBalance', address], () =>
    nft.getCollaboratorBalance(address)
  );

  return query;
}
