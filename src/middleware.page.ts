import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (
    pathname === '/kz/kk/xp/harrypotter-joy/' ||
    pathname === '/kz/ru/xp/harrypotter-joy/'
  ) {
    const url = req.nextUrl.clone()
    url.pathname = '/site-disabled'
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/settings`)
    const data = await res.json()
    if (data.siteEnabled !== true) return NextResponse.redirect(url)
  }
  return NextResponse.next()
}
