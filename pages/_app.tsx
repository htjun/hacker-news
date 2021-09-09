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
    font-family: 'Telegraf';
    src: url('fonts/Telegraf-Bold.eot');
    src: url('fonts/Telegraf-Bold.eot?#iefix') format('embedded-opentype'), url('fonts/Telegraf-Bold.woff2') format('woff2'), url('fonts/Telegraf-Bold.woff') format('woff');
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
