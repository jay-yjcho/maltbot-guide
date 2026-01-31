import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google AdSense Script - Replace with your actual publisher ID */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX`}
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}