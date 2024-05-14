import clsx from 'clsx'
import type { ComponentProps } from 'react'

import { IconComponent } from '../icon.component'

interface InputProperties extends ComponentProps<'input'> {
  containerClassName?: string
}
export const Input = ({ containerClassName, ...rest }: InputProperties) => {
  return (
    <div className={clsx('relative w-full', containerClassName)}>
      <IconComponent name="inputBg" className="absolute inset-0 z-[-1]" />
      <input
        type="text"
        className="h-[5.625rem] w-full border-none bg-transparent px-3 text-center font-noto-sans text-[1.875rem] font-medium outline-none"
        {...rest}
      />
    </div>
  )
}
