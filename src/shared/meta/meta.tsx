import Head from 'next/head'
import Script from 'next/script'
import { NextSeo } from 'next-seo'

import { APP_META } from './meta.config'

type IMetaProperties = {
  title: string
  description: string
  canonical?: string
}

const Meta = (props: IMetaProperties) => {
  return (
    <>
      <Head>
        <meta charSet="utf8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="icon" href={'https://kinderpromo.kz/kz/favicon.ico'} key="favicon" />
      </Head>
      <Script
        async
        strategy="afterInteractive"
        src="https://static.addtoany.com/menu/page.js"
      />
      <Script
        async
        defer
        strategy="afterInteractive"
        src="https://www.kinder.com/kz/sites/kinder_kz/files/google_tag/primary/google_tag.script.js?t=1718881156"
      />
      <Script
        strategy="afterInteractive"
        async
        defer
        src="https://kinderpromo.kz/kz/yandex-metrica.js"
      />

      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: APP_META.locale,
          site_name: APP_META.site_name,
        }}
      />
    </>
  )
}

export { Meta }
