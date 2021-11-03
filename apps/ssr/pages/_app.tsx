import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Header from '../components/Header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ssr!</title>
      </Head>
      <div className="app">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
