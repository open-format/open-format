import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { OpenFormatProvider } from '../src/provider';

const App: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <OpenFormatProvider
      config={{
        network: 'localhost',
        factory: '1fe0b323-223f-48aa-8797-137931473f49',
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
