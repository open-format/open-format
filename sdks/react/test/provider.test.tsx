import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { OpenFormatProvider, useOpenFormat } from '../src/provider';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('OpenFormatProvider', () => {
  it('should render without error when provider is used', () => {
    render(<App />);
  });

  it('it should throw an error when useOpenFormat is used without the context', () => {
    expect(() => render(<Test />)).toThrow();
  });
});

function Test() {
  useOpenFormat();
  return <p>Open format</p>;
}

function App() {
  return (
    <OpenFormatProvider>
      <Test />
    </OpenFormatProvider>
  );
}
