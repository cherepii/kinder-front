import logo from '@public/assets/images/logo.png'
import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import * as React from 'react'

export interface IHeaderProperties extends React.ComponentProps<'header'> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className } = props

  const { t } = useTranslation(undefined, { keyPrefix: 'HEADER' })

  const HEADER_LINKS = [
    {
      label: t('MISSION'),
      link: 'https://www.kinder.com/kz/ru/alittlealot?_gl=1*1m329zs*_up*MQ..&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLN5MfgcWyYwJuG7NY6SBt7KISvtFGLAyN1cgu7npaENQp1GduX3ZkMaArG8EALw_wcB',
    },
    {
      label: t('PRODUCTS'),
      link: 'https://www.kinder.com/kz/ru/products?_gl=1*1m329zs*_up*MQ..&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLN5MfgcWyYwJuG7NY6SBt7KISvtFGLAyN1cgu7npaENQp1GduX3ZkMaArG8EALw_wcB',
    },
    {
      label: t('INICIATIVES'),
      link: 'https://www.kinder.com/kz/ru/initiatives?_gl=1*1m329zs*_up*MQ..&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLN5MfgcWyYwJuG7NY6SBt7KISvtFGLAyN1cgu7npaENQp1GduX3ZkMaArG8EALw_wcB',
    },
    {
      label: t('APPLAYDU'),
      link: 'https://www.kinder.com/kz/ru/xp/natoons-toys/?_gl=1*1m329zs*_up*MQ..&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLN5MfgcWyYwJuG7NY6SBt7KISvtFGLAyN1cgu7npaENQp1GduX3ZkMaArG8EALw_wcB',
    },
    {
      label: t('PROMOTIONS'),
      link: 'https://www.kinder.com/kz/ru/',
    },
    {
      label: t('OUR'),
      link: 'https://www.kinder.com/kz/ru/vkusnoe-kachestvo',
    },
  ]

  return (
    <header
      {...props}
      className={clsx('relative bg-primary-accent px-7 max-lg:px-3', className)}
    >
      <ul className="flex items-center justify-end gap-8 font-noto-sans text-xs text-secondary-text max-lg:hidden">
        {HEADER_LINKS.map((link) => (
          <li
            key={link.link}
            className="border-b-2 border-b-primary-accent transition-colors hover:border-b-primary-accent--hover"
          >
            <a href={link.link} className="block h-full py-4">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden items-center justify-end py-3 max-lg:flex">
        <IconComponent name="burger" />
      </div>
      <Link href="/" className="absolute left-[0.9375rem] top-0 ">
        <Image alt="Logo" src={logo} className="aspect-[200/110] w-[12.5rem]" />
      </Link>
    </header>
  )
})
Header.displayName = 'Header'

export default Header
