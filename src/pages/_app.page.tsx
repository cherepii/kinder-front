import '@shared/styles/global.scss'
import 'react-photo-view/dist/react-photo-view.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default appWithTranslation(MyApp)
