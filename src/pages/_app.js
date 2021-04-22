import Head from "next/head";
import { GlobalStyles } from "../styles/globalstyles";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Code and Soul Blog | Next.js</title>
        <meta
          name="description"
          content="Blog example using next.js SSG and external API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
