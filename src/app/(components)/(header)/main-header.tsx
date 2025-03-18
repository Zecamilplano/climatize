"use client"
import Link from "next/link"
import Image from "next/image"
import { useHeader } from "../../hooks/hook-header-scroll"

export function MainHeader() {
  const { links, pathname, scrollToSection, activeSection } = useHeader()

  return (
    <header key={1} className={`w-screen  md:h-[101px] md:w-auto flex md:flex-col justify-center flex-wrap md:justify-between md:pl-8 md:pr-8 md:pt-1 lg:justify-between shadow-header font-sans lg:flex-row content-center  top-0 left-0 right-0 z-50 bg-white
        ${pathname === "/" ? "md:fixed" : "relative"}  
`}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />
      <div className="flex flex-col items-center md:items-end  md:self-center  pt-2 text-link-normal">
        {/* <a href="https://wa.me/5577999827672?text=Ol%C3%A1%2C%20climatize!" target="_blank" className="text-2xl hover:opacity-70 active:opacity-60">FONE: (77) 999827672</a> */}
        <a href="https://wa.me/5577999827672?text=Ol%C3%A1%2C%20climatize!" target="_blank" className="text-2xl hover:opacity-70 active:opacity-60">FONE: (xx) xxxxxxxxx</a>

        <nav className="hidden lg:flex">
          <ul className="flex gap-12 text-3xl">
            {links.map(link => (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <button
                    onClick={() => {
                      if (pathname === "/") {
                        scrollToSection(link.href);

                      } else {
                        window.location.href = `/${link.href}`
                      }
                    }}
                    className={`
                      ${activeSection === link.href
                        ? "text-link-clicked "
                        : "text-link-normal"
                      } transition-all pb-1 outline-none
                    `}
                  >
                    {link.name}
                  </button>
                ) : (
                  // Link normal para outras páginas
                  <Link
                    href={pathname === "/sobre" ? "/sobre" : link.href}
                    className={`
                      ${pathname === link.href
                        ? "text-link-clicked"
                        : "text-link-normal"
                      } transition-all pb-1 outline-none
                    `}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header >
  )
}

