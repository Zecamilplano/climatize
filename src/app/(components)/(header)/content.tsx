"use client"
import { useHeaderScroll } from "@/app/hooks/hook-header-scroll"
import Link from "next/link"
import { usePathname } from "next/navigation";

type ContentType = "home" | "admin" | "product"

interface Props {
  contentType: ContentType
}

type LinkType = {
  label: string
  href: string
}

const linkByType: Record<ContentType, LinkType[]> = {
  home: [
    { label: "Início", href: "#inicio" },
    { label: "Produto", href: "#produtos" },
    { label: "Sobre", href: "/sobre" },
  ],
  admin: [
    { label: "Dashboard", href: "/admin" },
    { label: "Usuários", href: "/admin/usuarios" },
    { label: "Configurações", href: "/admin/config" },
  ],
  product: [
    { label: "Lista de Produtos", href: "/produto" },
    { label: "Novo Produto", href: "/produto/novo" },
  ],
}

export default function ContentComponent({ contentType }: Props) {
  const links = linkByType[contentType]
  const linkHome = linkByType.home
  const pathname = usePathname()
  const { activeSection, scrollToSection } = useHeaderScroll(pathname, linkHome)
  console.log("activeSection", activeSection)

  return (
    <nav className="flex gap-4">
      {links.map(link =>
        contentType === "home" ? (
          <button
            key={link.href}
            onClick={() => scrollToSection(link.href)}
            className={`${activeSection === link.href
              ? "text-link-clicked underline"
              : "text-link-normal"
              }  transition-all pb-1 outline-none text-2xl `}
          >
            {link.label}
          </button>
        ) : (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        )
      )}
    </nav>
  )
}
