"use client"
import { useHeaderScroll } from "@/app/hooks/hook-header-scroll"
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

type ContentType = "home" | "admin" | "product"

interface Props {
  contentType: ContentType
}

type NavigationLinkType = {
  label: string
  href: string
}

const linkByType: Record<ContentType, NavigationLinkType[]> = {
  home: [
    { label: "Início", href: "#inicio" },
    { label: "Produto", href: "#produtos" },
    { label: "Sobre", href: "/sobre" },
  ],
  admin: [
    { label: "Painel admin", href: "/" },
    { label: "Adicionar produtos", href: "/" },
    { label: "Produtos", href: "/" },
  ],
  product: [
    { label: "Voltar para o início", href: "/" },
  ],
}

export default function ContentComponent({ contentType }: Props) {
  const links = linkByType[contentType]
  const linkHome = linkByType.home
  const pathname = usePathname()
  const { activeSection, scrollToSection } = useHeaderScroll(pathname, linkHome)
  const [openModal, setOpenModal] = useState(false)

  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" })
    sessionStorage.setItem("logout", "true")
    router.push("/entrar")
  }


  return (
    <nav className="flex gap-4" key={2}>
      {links.map((link, index) =>
        <Fragment key={index}>
          {contentType === "home" && (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className={`${activeSection === link.href
                ? "text-link-clicked underline"
                : "text-link-normal"
                } hidden lg:block  transition-all pb-1 outline-none text-2xl `}
            >
              {link.label}
            </button>
          )}

          {contentType === "product" && (
            <Link
              href="/"
              key={index}
              className="h-auto flex items-center text-link-normal hover:opacity-80 active:opacity-50 text-2xl"
            >
              {link.label}
            </Link>
          )}


        </Fragment>
      )}

      {contentType === "admin" && (
        <div className="flex items-center gap-2 pr-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/img-eze.jpeg"
              height={50}
              width={50}
              alt="image ezequiel"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <div
            onClick={() => setOpenModal(prev => !prev)}
            className="flex flex-col gap-0 relative bg-white cursor-pointer"
          >
            <p className="leading-4 text-gray-700">Ezequiel</p>

            <div className="flex justify-between items-center ">
              <p className="text-xs text-gray-500">admin</p>
              <ArrowDown size={12} color="#6b7280" />
            </div>

            {openModal === true && (
              <div className=" px-3 py-3 rounded-b-md absolute top-8 w-full bg-white">
                <button
                  onClick={handleLogout}
                  className="text-red-600 bg-red-100 hover:bg-red-200  px-2 py-1 rounded text-sm"
                >
                  Sair
                </button>
              </div>
            )}

          </div>


        </div>
      )}
    </nav>
  )
}
