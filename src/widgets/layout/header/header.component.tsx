import logo from '@public/assets/images/logo.png'
import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import * as React from 'react'

export interface IHeaderProperties extends React.ComponentProps<'header'> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className } = props

  const { t } = useTranslation(undefined, { keyPrefix: 'HEADER' })

  const HEADER_LINKS = [
    {
      label: t('MISSION'),
      link: '#',
    },
    {
      label: t('PRODUCTS'),
      link: '#2',
    },
    {
      label: t('INICIATIVES'),
      link: '#3',
    },
    {
      label: t('APPLAYDU'),
      link: '#6',
    },
    {
      label: t('PROMOTIONS'),
      link: '#4',
    },
    {
      label: t('OUR'),
      link: '#5',
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
      <Image
        alt="Logo"
        src={logo}
        className="absolute left-[0.9375rem] top-0 aspect-[200/110] w-[12.5rem]"
      />
    </header>
  )
})
Header.displayName = 'Header'

export default Header
