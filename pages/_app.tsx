import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { AppProps } from 'next/app';
import Head from './metas/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
