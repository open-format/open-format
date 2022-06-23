import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { OpenFormatProvider } from '../src/provider';

const App: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <OpenFormatProvider>{children}</OpenFormatProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: App, ...options });

export * from '@testing-library/react';
export { customRender as render };
