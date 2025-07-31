"use client"
import { usePathname } from "next/navigation";
import { Header } from "./header";

export function HeaderAdmin() {
  const pathname = usePathname()
  const headerUrlVisible = pathname === "/admin/painel-admin" || pathname === "/admin/novo-produto"

  return (
    headerUrlVisible && (
      <Header.container >
        <Header.image />
        <Header.centerContent />
        <Header.content contentType="admin" />
      </Header.container>
    )

  )
}
