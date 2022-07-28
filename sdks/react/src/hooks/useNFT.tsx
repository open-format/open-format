import { useRef } from 'react';
import { useOpenFormat } from '../provider';

/**
 * Hook to return a new instance of an OpenFormatNFT
 * @param {string} address - Address of a deployed Open Format contract
 * @returns OpenFormatNFT
 */
export function useNFT(address: string) {
  const { sdk } = useOpenFormat();
  return useRef(sdk.getNFT(address)).current;
}
