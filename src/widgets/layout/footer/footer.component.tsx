import wave from '@public/assets/images/footer-wave.png'
import planet from '@public/assets/images/planet.png'
import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

export interface IFooterProperties extends React.ComponentProps<'footer'> {}
export const Footer = React.memo((props: IFooterProperties) => {
  const { className } = props
  return (
    <footer {...props} className={clsx('font-noto-sans text-secondary-text', className)}>
      <Image src={wave} alt="wave" className="aspect-[1200/103] w-full object-cover" />
      <div className="relative flex items-start justify-between bg-[#F3410E] px-[4.5rem] pt-3 pb-4 max-xl:block max-xl:px-8 max-xl:pt-10">
        <div>
          <IconComponent name="ferrero" />
          <p className="mt-[0.625rem] text-xs">
            © Ferrero 2024 <span className="ml-1">All rights reserved</span>
          </p>
        </div>
        <div className="flex items-start max-xl:mt-5 max-xl:block max-xl:w-full max-xl:max-w-[15.5rem]">
          <div className="w-full max-w-[33rem] text-xs font-bold">
            <ul className="flex gap-x-6 gap-y-5 max-xl:flex-col">
              <li>
                <Link href="#">ПОТРЕБИТЕЛЬСКАЯ ЛИНИЯ</Link>
              </li>
              <li>
                <Link href="#">Юридические aспекты</Link>
              </li>
              <li>
                <Link href="#">Технические параметры</Link>
              </li>
            </ul>
            <ul className="my-3 flex gap-x-6 gap-y-5 max-xl:flex-col">
              <li>
                <Link href="#">Карта cайта</Link>
              </li>
              <li>
                <Link href="#">FERRERO FOODSERVICE</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Политика в отношении обработки персональных данных</Link>
              </li>
            </ul>
          </div>
          <div className="mx-5 flex items-center text-xs max-xl:hidden">
            <a href="#" className="border-r border-r-secondary-text px-4">
              KK
            </a>
            <a href="#" className="px-4">
              RU
            </a>
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
