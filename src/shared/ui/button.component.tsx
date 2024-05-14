import clsx from 'clsx'
import type { ComponentProps } from 'react'

import type { IconsTypes } from './icon.component'
import { IconComponent } from './icon.component'

export type TButtonVariant = 'primary' | 'secondary'

interface IButtonProperties extends ComponentProps<'button'> {
  containerClassName?: string
  variant?: TButtonVariant
}

const getButtonIcon = (variant: TButtonVariant): IconsTypes => {
  switch (variant) {
    case 'primary': {
      return 'buttonBgPrimary'
    }

    case 'secondary': {
      return 'buttonBgSecondary'
    }

    default: {
      return 'buttonBgPrimary'
    }
  }
}

const getButtonTextClasses = (variant: TButtonVariant): string => {
  switch (variant) {
    case 'primary': {
      return 'text-primary-text'
    }

    case 'secondary': {
      return 'text-secondary-text'
    }

    default: {
      return 'text-primary-text'
    }
  }
}

export const Button = ({
  containerClassName,
  variant = 'primary',
  ...rest
}: IButtonProperties) => {
  const iconName = getButtonIcon(variant)
  const textClasses = getButtonTextClasses(variant)

  return (
    <div
      className={clsx(
        'relative flex h-[5.1875rem] w-full max-w-[18.5625rem] items-center justify-center',
        containerClassName
      )}
    >
      <IconComponent name={iconName} className="absolute inset-0 z-[-1]" />
      <button
        {...rest}
        className={clsx(
          'h-full w-full select-none pt-[0.375rem] text-[1.875rem] leading-[2.5rem]',
          textClasses,
          rest.className
        )}
      >
        {rest.children}
      </button>
    </div>
  )
}
