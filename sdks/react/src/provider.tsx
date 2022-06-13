import React, { createContext, useContext } from 'react';

const OpenFormatContext = createContext<{} | undefined>(undefined);

export function OpenFormatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OpenFormatContext.Provider value={{}}>
      {children}
    </OpenFormatContext.Provider>
  );
}

export function useOpenFormat() {
  const context = useContext(OpenFormatContext);

  if (typeof context === 'undefined') {
    throw new Error('<OpenFormatProvider> is not wrapping your app');
  }

  return context;
}
