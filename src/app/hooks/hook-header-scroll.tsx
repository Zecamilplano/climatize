import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Link = {
  href: string
  label: string
}

export function useHeaderScroll(pathname: string, links: Link[]) {
  const [activeSection, setActiveSection] = useState(pathname)

  const router = useRouter()
  const scrollToSection = (href: string) => {

    if (href.startsWith("#")) {
      const path = window.location.pathname
      if (path !== "/") {
        router.push(`/${href}`)
      } else {
        const id = href.replace("#", "");
        const elemento = document.getElementById(id);
        if (elemento) {
          const offset = 150;
          const top = elemento.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }

    } else {
      router.push("/sobre")
    }
  }

  useEffect(() => {
    const updateActiveSection = () => {
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0

      let current = pathname

      if (pathname === "/") {
        const scrollPosition = window.scrollY + window.innerHeight / 2

        links.forEach((link) => {
          if (!link.href.startsWith("#")) return

          const section = document.querySelector(link.href)
          if (!section || !(section instanceof HTMLElement)) return

          const sectionTop = section.offsetTop - headerHeight
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = link.href
          }
        })
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", updateActiveSection)
    updateActiveSection()

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
    }
  }, [pathname, links])

  return { activeSection, scrollToSection }
}

