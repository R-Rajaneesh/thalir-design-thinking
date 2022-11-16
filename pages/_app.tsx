import { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.scss";
// import "../styles/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/javascript/sound.js" strategy="lazyOnload" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js" />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
