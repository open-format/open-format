import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import { init } from '@web3-onboard/react';

const injected = injectedModule();
const walletConnect = walletConnectModule();

init({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: '0x13881',
      token: 'MATIC',
      label: 'Polygon Mumbai',
      rpcUrl: 'https://matic-mumbai.chainstacklabs.com/',
    },
  ],
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
});
