"use client"
import { usePathname } from "next/navigation";
import { Header } from "./header";


export function HeaderInfoProduct() {
  const pathname = usePathname()
  return (
    pathname === "/produto/[nome]" && (
      <Header.container>
        <Header.image />
        <Header.content contentType="product" />
      </Header.container>
    )

  )
}
