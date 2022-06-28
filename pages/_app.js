import "../styles/globals.css";
import "../dist/output.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Desenvolvimento web, sites, aplicativos, software, software house, webservices"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Urbanist:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/devium-black.svg" />

        <meta property="og:image" content="/screenshot.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
