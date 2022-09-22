import {
  OpenFormatProvider,
  ConnectButton
} from "@simpleweb/open-format-react";
import React from "react";
import Link from "next/link";
import { AppProps } from "next/app";
import "../styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OpenFormatProvider config={{ network: "mumbai" }}>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/example">Example Page</Link>
              </li>
            </ul>
          </nav>
          <ConnectButton />
        </header>

        <Component {...pageProps} />
      </OpenFormatProvider>
    </>
  );
}

React.create;

export default MyApp;
