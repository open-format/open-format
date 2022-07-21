import React, { FC, ReactElement, useEffect } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { OpenFormatProvider } from '../src/provider';
import { ethers } from 'ethers';
import { useDeploy } from './hooks';

const signer = new ethers.Wallet(
  '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
  new ethers.providers.JsonRpcProvider('http://localhost:8546')
);

const App: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <OpenFormatProvider
      config={{
        network: 'http://localhost:8546',
        factory: '1fe0b323-223f-48aa-8797-137931473f49',
        signer,
      }}
    >
      {children}
    </OpenFormatProvider>
  );
};

export function DeployedTest({
  children,
}: {
  children: (props: { address: string }) => React.ReactNode;
}) {
  const { deploy, data } = useDeploy();

  useEffect(() => {
    deploy({
      maxSupply: 100,
      mintingPrice: 0.01,
      name: 'Test',
      symbol: 'TEST',
      url: 'ipfs://',
    });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <span data-testid="deploy" />
      {children({ address: data.contractAddress })}
    </>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: App, ...options });

export * from '@testing-library/react';
export { customRender as render };
