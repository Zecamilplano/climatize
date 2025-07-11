import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import API from "@/app/database/api"

export async function POST(request: Request) {
  const { user, password } = await request.json()
  const useCookie = await cookies()
  console.log(user, password)

  const res = await fetch(`${API}/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "codigo": user,
      "senha": password
    })
  })

  if (res.ok) {
    const data = await res.json()

    useCookie.set("user", data.usuario.codigo, {
      maxAge: 60 * 60 * 24 * 360,
      path: "/",
    })

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false }, { status: 401 })
}

export const config = {
  matcher: ["/admin/:path*"]
}
