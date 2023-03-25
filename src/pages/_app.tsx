import "../../styles/globals.css"
import type { AppProps } from 'next/app'
import ReactGA from "react-ga";

ReactGA.initialize("UA-261751748-1");

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
