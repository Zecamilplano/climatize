"use client"
import { usePathname } from "next/navigation"
import { MainHeader } from "./main-header"
import { ProductHeader } from "./product-header"

export function Header() {

  const pathname = usePathname()
  const isHomeRoute = pathname.startsWith("/inicio")
  const isProductsRoute = pathname.startsWith("/produtos")

  if (isHomeRoute) return <MainHeader />
  if (isProductsRoute) return <ProductHeader />

  return (
    <MainHeader />
  )
}

