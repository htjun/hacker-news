import type { AppProps } from 'next/app'
require('destyle.css')
import { createGlobalStyle } from "styled-components"
import * as style from "src/styles/style"

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: ${style.fontSet.sans};
  }

  @font-face {
    font-family: 'raf';
    src: url('fonts/raf-bold.eot');
    src: url('fonts/raf-bold.eot?#iefix') format('embedded-opentype'), url('fonts/raf-bold.woff2') format('woff2'), url('fonts/raf-bold.woff') format('woff');
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
