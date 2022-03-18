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
        <link rel="icon" href="./img/logo_blue.svg" />
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
