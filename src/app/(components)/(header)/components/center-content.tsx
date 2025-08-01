"use client"
import { useHeaderScroll } from "@/app/hooks/hook-header-scroll"
import { usePathname } from "next/navigation"

type ContentType = "admin"

interface Props {
  contentType: ContentType
}

type NavigationLinkType = {
  label: string
  href: string
}

const linkByType: Record<ContentType, NavigationLinkType[]> = {
  admin: [
    { label: "Painel Admin", href: "/admin/painel-admin" },
    { label: "Adicionar produto", href: "/admin/novo-produto" },
    { label: "Lista de produtos", href: "#produtos" },
  ]
}

export default function CenterContent() {
  const link = linkByType
  const pathname = usePathname()
  const { scrollToSection } = useHeaderScroll(pathname, linkByType.admin)

  return (
    <div className="flex flex-row gap-2">
      {link.admin && (
        link.admin.map(data => (
          <button
            onClick={() => scrollToSection(data.href)}
            className={`text-link-normal hover:opacity-80 active:opacity-50 text-2x`}
          >
            {data.label}
          </button>
        ))
      )}
    </div>
  )
}
