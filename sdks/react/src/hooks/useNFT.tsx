import { useRef } from 'react';
import { useOpenFormat } from '../provider';

export function useNFT(address: string) {
  const { sdk } = useOpenFormat();
  return useRef(sdk.getNFT(address)).current;
}
