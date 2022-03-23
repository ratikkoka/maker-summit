import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import React from 'react';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }) {

  dynamic(() => {
    return import('bootstrap/dist/js/bootstrap');
  }, {ssr: false})

  return (
    <>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  )
}

export default MyApp
