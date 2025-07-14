"use client"
import { usePathname } from "next/navigation"
import { MainHeader } from "./main-header"
import { ProductHeader } from "./product-header"
import { LoginHeader } from "./login-header"
import { NewProductHeader } from "./new-product-header"
import { AdminHeader } from "./admin-header"

export function Header() {

  const pathname = usePathname()
  const isHomeRoute = pathname.startsWith("/inicio")
  const isProductsRoute = pathname.startsWith("/produto")
  const isLoginRoute = pathname.startsWith("/entrar")
  const isAdminRoute = pathname.startsWith("/admin/painel-admin")
  const isNewProductRoute = pathname.startsWith("/admin/novo-produto")

  if (isHomeRoute) return <MainHeader />
  if (isProductsRoute) return <ProductHeader />
  if (isLoginRoute) return <LoginHeader />
  if (isAdminRoute) return <AdminHeader />
  if (isNewProductRoute) return <NewProductHeader />

  return (
    <MainHeader />
  )
}

