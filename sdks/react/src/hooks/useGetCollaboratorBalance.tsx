import { OpenFormatNFT } from '@simpleweb/open-format';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to get the balance of a collaborator
 * @param {OpenFormatNFT} nft A deployed NFT instance
 * @param {string} address - Address of the collaborator
 * @returns {UseQueryResult}
 */
export function useGetCollaboratorBalance(nft: OpenFormatNFT, address: string) {
  const query = useQuery(['collaborator-balance', address], () =>
    nft.getCollaboratorBalance(address)
  );

  return query;
}
