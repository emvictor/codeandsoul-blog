import Head from "next/head";
import { GlobalStyles } from "../styles/globalstyles";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
