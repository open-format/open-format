import { useQuery } from 'react-query';
import { BigNumberish } from 'ethers';
import { useOpenFormat } from '../provider';

/**
 * Hook to get balance for a token
 * @param {{ token: BigNumberish }} token - Token ID
 * @returns BigNumber
 */
export function useGetTokenBalance(token: BigNumberish) {
  const { sdk } = useOpenFormat();

  const query = useQuery(['getTokenBalance', token], () =>
    sdk.getTokenBalance(token)
  );

  return query;
}
