import { OpenFormatProvider } from "@simpleweb/open-format-react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OpenFormatProvider>
        <Component {...pageProps} />
      </OpenFormatProvider>
    </>
  );
}

export default MyApp;
