import { useQuery } from 'react-query';
import { BigNumberish } from 'ethers';
import { useOpenFormat } from '../provider';

/**
 * Sets up Revenue Sharing
 * @param {Object} options
 * @param {string} contractAddress - address of the contract
 * @param {string[]} collaborators - list of collaborators addresses
 * @param {number[]} shares - list of shares for each collaborator
 * @param {number} holderPercentage - the holders percentage
 * @returns
 */
export function useRevenueSharing({
  revShareExtensionAddress,
  collaborators,
  shares,
  holderPercentage,
}: {
  revShareExtensionAddress: string;
  collaborators: string[];
  shares: BigNumberish[];
  holderPercentage: BigNumberish;
}) {
  const { sdk } = useOpenFormat();

  const query = useQuery(
    [
      'setupRevenueSharing',
      {
        revShareExtensionAddress,
        collaborators,
        shares,
        holderPercentage,
      },
    ],
    () =>
      sdk.setupRevenueSharing({
        revShareExtensionAddress,
        collaborators,
        shares,
        holderPercentage,
      })
  );

  return query;
}
