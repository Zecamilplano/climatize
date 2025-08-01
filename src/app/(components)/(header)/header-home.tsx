"use client"
import { usePathname } from "next/navigation";
import { Header } from "./header";

export function HeaderHome() {
  const pathname = usePathname()

  return (
    pathname === "/" && (
      <Header.container fixed={true}>
        <Header.image />
        <Header.content contentType="home" />
      </Header.container>
    )
  )
}
