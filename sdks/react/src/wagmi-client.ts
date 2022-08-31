import { chain, configureChains, createClient } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [publicProvider()]
);

const metamask = new MetaMaskConnector({ chains });

const walletconnet = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
});

const injected = new InjectedConnector({ chains });

export const wagmiClient = createClient({
  // @TODO fix hydration issue
  // autoConnect: true,
  connectors: [injected, metamask, walletconnet],
  provider,
  webSocketProvider,
});
