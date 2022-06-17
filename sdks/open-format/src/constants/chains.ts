import { Chain, ChainConfig } from '../types';

// list of chains Open Format supports
export const Chains: {
  [chain in Chain]: ChainConfig;
} = Object.freeze({
  mainnet: {
    id: 'mainnet',
    chainId: 1,
    name: 'Polygon',
    token: 'MATIC',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com/',
  },
  mumbai: {
    id: 'mumbai',
    chainId: 80001,
    name: 'Polygon Mumbai',
    token: 'MATIC',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com/',
  },
  localhost: {
    id: 'localhost',
    chainId: 1337,
    name: 'Localhost',
    token: 'ETH',
    rpcUrl: 'http://127.0.0.1:8545',
  },
});
