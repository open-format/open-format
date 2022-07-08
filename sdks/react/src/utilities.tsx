import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { OpenFormatProvider } from '../src/provider';
import { ethers } from 'ethers';

const signer = new ethers.Wallet(
  '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
  new ethers.providers.JsonRpcProvider('http://localhost:8545')
);

const App: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <OpenFormatProvider
      config={{
        network: 'localhost',
        factory: '1fe0b323-223f-48aa-8797-137931473f49',
        signer,
      }}
    >
      {children}
    </OpenFormatProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: App, ...options });

export * from '@testing-library/react';
export { customRender as render };
