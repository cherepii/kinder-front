import clsx from 'clsx'
import type { ComponentProps } from 'react'

import { IconComponent } from '../icon.component'

interface InputProperties extends ComponentProps<'input'> {
  containerClassName?: string
}
export const Input = ({ containerClassName, ...rest }: InputProperties) => {
  return (
    <div className={clsx('relative w-full', containerClassName)}>
      <IconComponent name="inputBg" className="absolute inset-0 z-[1] max-lg:hidden" />
      <IconComponent
        name="inputBgMob"
        className="absolute inset-y-0 left-[50%] z-[1] hidden translate-x-[-50%] max-lg:block"
      />
      <input
        type="text"
        className="relative z-[2] h-[5.625rem] w-full border-none bg-transparent px-3 text-center font-noto-sans text-[1.875rem] font-medium outline-none max-lg:h-[3.5625rem] max-lg:text-[1.25rem]"
        {...rest}
      />
    </div>
  )
}
