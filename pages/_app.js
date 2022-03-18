import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import Layout from '../components/layout'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Ratik Koka, John You" />
        <meta
          name="description"
          content="Maker Summit Project Showcase"
        />
        <title>Maker Summit</title>
      </Head>

      <Layout>
        <div className="grid">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  )
}

export default MyApp
