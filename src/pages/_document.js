import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Code and Soul Blog | Next.js</title>
          <meta
            name="description"
            content="Blog example using next.js SSG and external API"
          />
          <meta http-equiv="Content-Type" content="text/html" />
          <meta charSet="utf-8" />
          <link rel="icon" href="./favicon.svg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
