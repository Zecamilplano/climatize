"use client"
import { usePathname } from "next/navigation";
import { Header } from "./header";

export function HeaderHome() {
  const pathname = usePathname()

  return (
    (pathname === "/" || pathname === "/sobre") && (
      <Header.container fixed={pathname === "/" ? true : false}>
        <Header.image />
        <Header.content contentType="home" />
      </Header.container>
    )

  )
}
