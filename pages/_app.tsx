import type { AppProps } from 'next/app'
require('destyle.css')
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
