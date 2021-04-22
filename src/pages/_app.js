
import Head from "next/head";
import { GlobalStyles } from "../styles/globalstyles";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="./favicon.svg" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
