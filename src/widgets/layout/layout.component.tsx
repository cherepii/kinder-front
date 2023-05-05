import type { Meta } from '@shared/meta'
import * as React from 'react'

import { Header } from './header'
import { Main } from './main'

export interface ILayoutProperties extends React.ComponentProps<'div'> {
  Meta: React.ReactElement<typeof Meta>
}

export const Layout = (props: ILayoutProperties) => {
  const { children, Meta, ...rest } = props
  return (
    <>
      {Meta}
      <div {...rest} className="flex min-h-screen flex-col justify-between">
        {children}
      </div>
    </>
  )
}

Layout.Header = Header
Layout.Footer = React.lazy(() => import('./footer/footer.component'))
Layout.Main = Main
