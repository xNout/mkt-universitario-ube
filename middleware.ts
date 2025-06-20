import { NextRequest, NextResponse } from 'next/server'

// Middleware para verificar si el usuario está autenticado mediante una cookie
export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/home')) {
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }

  if (pathname.startsWith('/login') && token) {
    const url = req.nextUrl.clone()
    url.pathname = '/home'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  // Rutas que deben pasar por el middleware
  matcher: ['/home/:path*', '/login'],
}
