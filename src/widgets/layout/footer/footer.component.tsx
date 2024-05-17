import wave from '@public/assets/images/footer-wave.png'
import planet from '@public/assets/images/planet.png'
import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import * as React from 'react'

export interface IFooterProperties extends React.ComponentProps<'footer'> {}
export const Footer = React.memo((props: IFooterProperties) => {
  const { className } = props

  const { pathname, query } = useRouter()

  const { t } = useTranslation(undefined, { keyPrefix: 'FOOTER' })

  return (
    <footer {...props} className={clsx('font-noto-sans text-secondary-text', className)}>
      <Image src={wave} alt="wave" className="aspect-[1200/103] w-full object-cover" />
      <div className="relative flex items-start justify-between bg-[#F3410E] px-[4.5rem] pt-3 pb-4 max-xl:block max-xl:px-8 max-xl:pt-10">
        <div>
          <IconComponent name="ferrero" />
          <p className="mt-[0.625rem] text-xs">
            {t('MARK.LEFT')}
            <span className="ml-1">{t('MARK.RIGHT')}</span>
          </p>
        </div>
        <div className="flex items-start max-xl:mt-5 max-xl:block max-xl:w-full max-xl:max-w-[15.5rem]">
          <div className="w-full max-w-[33rem] text-xs font-bold">
            <ul className="flex gap-x-6 gap-y-5 max-xl:flex-col">
              <li>
                <Link href="https://www.ferrero.com/contact-us/">{t('LINKS.LINE')}</Link>
              </li>
              <li>
                <Link href="https://www.kinder.com/kz/ru/legal-aspects">
                  {t('LINKS.LEGAL')}
                </Link>
              </li>
              <li>
                <Link href="https://www.kinder.com/kz/ru/technical-requirements">
                  {t('LINKS.PARAMS')}
                </Link>
              </li>
            </ul>
            <ul className="my-3 flex gap-x-6 gap-y-5 max-xl:flex-col">
              <li>
                <Link href="https://www.kinder.com/kz/ru/sitemap">{t('LINKS.MAP')}</Link>
              </li>
              <li>
                <Link href="https://www.ferrerofoodservice.com/ru/ru/">
                  {t('LINKS.FERRERO')}
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="https://www.kinder.com/kz/ru/politika-v-otnosenii-obrabotki-personal-nyh-dannyh">
                  {t('LINKS.POLicy')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-5 flex items-center text-xs max-xl:mx-0 max-xl:mt-3">
            <Link
              href={{ pathname, query }}
              locale="kz"
              scroll={false}
              className="border-r border-r-secondary-text px-4 max-xl:pl-0"
            >
              KK
            </Link>
            <Link href={{ pathname, query }} locale="ru" scroll={false} className="px-4">
              RU
            </Link>
          </div>
          <Image
            src={planet}
            alt="planet"
            className="right-8 bottom-12 -mt-3 aspect-square w-full max-w-[3.25rem] max-xl:absolute max-xl:mt-0"
          />
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
