import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
      <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></Script>
    </>
  )
}

export default MyApp
