"use client"
import { HeaderHome } from "../(components)/(header)/header-home";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderHome /> {/* <-- Esse componente usa hook de navegação */}
      {children}
    </>
  )
}

