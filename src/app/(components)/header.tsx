"use client"
import Link from "next/link"
import Image from "next/image"
import { useHeader } from "../hooks/hook-header-scroll"

export function Header() {
  const { links, pathname, scrollToSection, activeSection } = useHeader()

  return (
    <header key={1} className="w-screen md:w-auto h-auto flex flex-col justify-center flex-wrap md:justify-between md:pl-8 md:pr-8 md:pt-1 lg:justify-between shadow-header font-sans lg:flex-row content-center fixed top-0 left-0 right-0 z-50 bg-white">
      <Image src="/logo.png" alt="Logo" width={300} height={300} />
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
                      scrollToSection(link.href);
                    }}
                    className={`
                      ${activeSection === link.href
                        ? 'text-red-600 border-blue-600'
                        : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                      } transition-all border-b-2 pb-1
                    `}
                  >
                    {link.name}
                  </button>
                ) : (
                  // Link normal para outras páginas
                  <Link
                    href={link.href}
                    className={`
                      ${pathname === link.href
                        ? 'text-red-600 border-blue-600'
                        : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                      } transition-all border-b-2 pb-1
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

