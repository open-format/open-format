import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import { init } from '@web3-onboard/react';
import { Chains } from '@simpleweb/open-format';
import { ethers } from 'ethers';

const injected = injectedModule();
const walletConnect = walletConnectModule();

init({
  wallets: [injected, walletConnect],
  chains: Object.values(Chains).map(chain => ({
    id: ethers.utils.hexValue(chain.chainId),
    label: chain.name,
    token: chain.token,
    rpcUrl: chain.rpcUrl,
  })),
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
});
