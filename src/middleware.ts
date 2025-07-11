import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value

  if (!user && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/entrar", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"]
}
