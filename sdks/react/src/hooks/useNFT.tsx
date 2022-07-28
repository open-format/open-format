import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';
import { useEffect, useRef } from 'react';
import { useOpenFormat } from '../provider';

export function useNFT(address: string) {
  const [{ wallet }] = useConnectWallet();
  const { sdk } = useOpenFormat();

  const nft = useRef(sdk.getNFT(address));

  useEffect(() => {
    if (wallet) {
      nft.current.signer = new ethers.providers.Web3Provider(
        wallet.provider
      ).getSigner();
    } else {
      nft.current.signer = undefined;
    }
  }, [wallet]);

  return nft.current;
}
