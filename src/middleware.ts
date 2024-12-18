import { NextResponse, type NextRequest } from 'next/server';

export const config = {
  matcher: ['/dashboard/:path*', '/signup', '/signin', '/todos:path*'],
};

const AUTH_PAGES = ['/signup', '/signin'];

export const middleware = async (request: NextRequest) => {
  const { nextUrl, cookies } = request;
  const { pathname } = nextUrl;

  const token = cookies.get('token');
  console.log(`Token: ${token}`);

  if (AUTH_PAGES.some((page) => pathname.startsWith(page))) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
};
