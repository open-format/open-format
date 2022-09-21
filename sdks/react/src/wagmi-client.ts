import { chain, configureChains, createClient } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

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

const coinbase = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'Open Format',
  },
});

const injected = new InjectedConnector({ chains });

export const wagmiClient = createClient({
  autoConnect: false,
  connectors: [injected, coinbase, metamask, walletconnet],
  provider,
  webSocketProvider,
});
