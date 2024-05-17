import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { NextSeo } from 'next-seo'

import { APP_META } from './meta.config'

type IMetaProperties = {
  title: string
  description: string
  canonical?: string
}

const Meta = (props: IMetaProperties) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet="utf8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
      </Head>
      <Script
        async
        strategy="afterInteractive"
        src="https://static.addtoany.com/menu/page.js"
      />
      <Script
        async
        strategy="afterInteractive"
        src="https://www.kinder.com/kz/sites/kinder_kz/files/google_tag/google_tag.script.js"
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
