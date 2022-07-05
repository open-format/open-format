import React, { useEffect } from 'react';
import { useConnectWallet, useWallets } from '@web3-onboard/react';

const STORAGE_KEY = '@OPEN_FORMAT/walletLables';

interface Props extends React.ComponentProps<'button'> {
  labels?: {
    connecting: string;
    connected: string;
    disconnected: string;
  };
}

export function ConnectButton({
  labels = {
    connecting: 'Connecting...',
    connected: 'Disconnect',
    disconnected: 'Connect',
  },
  ...props
}: Props) {
  const [
    { wallet, connecting: isConnecting },
    connect,
    disconnect,
  ] = useConnectWallet();
  const wallets = useWallets();

  const isConnected = !!wallet;

  useEffect(() => {
    const getConnectedWallets = window.localStorage.getItem(STORAGE_KEY);

    if (typeof getConnectedWallets === 'string') {
      const walletLabels = JSON.parse(getConnectedWallets);

      if (walletLabels.length) {
        connect({
          autoSelect: {
            label: walletLabels[0],
            disableModals: true,
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    if (wallets.length) {
      const walletLabels = wallets.map(({ label }) => label);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(walletLabels));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [wallets]);

  return (
    <button
      onClick={() => {
        if (isConnected && wallet) {
          disconnect(wallet);
        } else {
          connect();
        }
      }}
      {...props}
    >
      {isConnecting
        ? labels.connecting
        : isConnected
        ? labels.connected
        : labels.disconnected}
    </button>
  );
}
