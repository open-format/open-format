import { useEffect, useRef } from 'react';
import { useSigner } from 'wagmi';
import { useOpenFormat } from '../provider';

/**
 * Hook to return a new instance of an OpenFormatNFT
 * @param {string} address - Address of a deployed Open Format contract
 * @returns OpenFormatNFT
 */
export function useNFT(address: string) {
  const { data: signer } = useSigner();
  const { sdk } = useOpenFormat();

  const nft = useRef(sdk.getNFT(address));

  useEffect(() => {
    if (sdk.signer) {
      nft.current.signer = sdk.signer;
    } else if (signer) {
      nft.current.signer = signer;
    } else {
      nft.current.signer = undefined;
    }
  }, [signer, sdk.signer]);

  return nft.current;
}
