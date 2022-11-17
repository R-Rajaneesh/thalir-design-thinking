import { AppProps } from "next/app";
import "../styles/globals.scss";
// import "../styles/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
export default MyApp;
