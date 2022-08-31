import { ConnectKitButton } from 'connectkit';
import React from 'react';

interface Props {
  labels?: {
    disconnected: string;
  };
}

export function ConnectButton({
  labels = {
    disconnected: 'Connect Wallet',
  },
}: Props) {
  return <ConnectKitButton label={labels.disconnected} />;
}
