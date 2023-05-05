import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import * as React from 'react'

export interface IHeaderProperties extends React.ComponentProps<'header'> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className, children } = props
  return (
    <header
      {...props}
      className={clsx(
        'relative flex w-full border-b-2 border-primary-text p-3 px-2',
        className
      )}
    >
      <IconComponent name="unistory" className="w-40" />
      {children}
    </header>
  )
})
Header.displayName = 'Header'

export default Header
