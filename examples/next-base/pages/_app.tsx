import "../styles/globals.css";
import { OpenFormatProvider } from "@simpleweb/open-format-react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OpenFormatProvider config={{ network: "mumbai" }}>
        <Component {...pageProps} />
      </OpenFormatProvider>
    </>
  );
}

export default MyApp;
