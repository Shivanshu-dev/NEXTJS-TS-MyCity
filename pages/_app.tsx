import '../styles/globals.css';
import '../styles/CitySelector.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Header from '../commonComponents/Header/Header';
import Footer from '../commonComponents/Footer/Footer';
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return( <>
  <Header />
  <div className={styles.main}>
    <Component {...pageProps} />
  </div>
  <Footer />
    </>)
}

export default MyApp
