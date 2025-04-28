"use client"
import { usePathname } from "next/navigation"
import { MainHeader } from "./main-header"
import { ProductHeader } from "./product-header"
import { LoginHeader } from "./login-header"
import { NewProductHeader } from "./new-product-header"

export function Header() {

  const pathname = usePathname()
  const isHomeRoute = pathname.startsWith("/inicio")
  const isProductsRoute = pathname.startsWith("/produtos")
  const isLoginRoute = pathname.startsWith("/entrar")
  const isAdminRoute = pathname.startsWith("/painel-admin")
  const isNewProductRoute = pathname.startsWith("/novo-produto")

  if (isHomeRoute) return <MainHeader />
  if (isProductsRoute) return <ProductHeader />
  if (isLoginRoute) return <LoginHeader />
  if (isAdminRoute) return <LoginHeader />
  if (isNewProductRoute) return <NewProductHeader />

  return (
    <MainHeader />
  )
}

