import '@shared/styles/global.scss'
import 'react-photo-view/dist/react-photo-view.css'
import 'swiper/css'
import 'swiper/css/navigation'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
