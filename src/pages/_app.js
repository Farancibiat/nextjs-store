import Head from 'next/head';
import Script from 'next/script';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Head>
        <title>Tienda Next</title>
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VRZFB1RFT3" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
     
       gtag('config', 'G-VRZFB1RFT3');
         `}
      </Script>
      <AppContext.Provider value={initialState}>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
