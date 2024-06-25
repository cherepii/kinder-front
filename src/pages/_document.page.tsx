import { APP_META } from '@shared/meta'
import { Head, Html, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang={APP_META.locale}>
      <Head />
      <body>
        <noscript aria-hidden={true}>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXP6KRH"
            height="0"
            width="0"
            title="Google Tag Manager"
          >
            Google Tag Manager
          </iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
