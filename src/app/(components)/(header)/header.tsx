"use client"
import { usePathname } from "next/navigation"
import { MainHeader } from "./main-header"
import { ProductHeader } from "./product-header"
import { LoginHeader } from "./login-header"

export function Header() {

  const pathname = usePathname()
  const isHomeRoute = pathname.startsWith("/inicio")
  const isProductsRoute = pathname.startsWith("/produtos")
  const isLoginRoute = pathname.startsWith("/entrar")
  const isAdminRoute = pathname.startsWith("/painel-admin")

  if (isHomeRoute) return <MainHeader />
  if (isProductsRoute) return <ProductHeader />
  if (isLoginRoute) return <LoginHeader />
  if (isAdminRoute) return <LoginHeader />

  return (
    <MainHeader />
  )
}

