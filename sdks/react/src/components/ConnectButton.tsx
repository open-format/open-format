import React from 'react';
import { useConnectWallet } from '@web3-onboard/react';

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

  const isConnected = !!wallet;

  return (
    <button
      onClick={() => {
        if (isConnected && wallet) {
          disconnect(wallet);
        } else {
          connect({});
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
