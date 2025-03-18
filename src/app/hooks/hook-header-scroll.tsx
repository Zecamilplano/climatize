"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function useHeader() {

  /* Scroll link */
  const pathname = usePathname();

  const links = [
    { name: "Início", href: "#inicio" },
    { name: "Produtos", href: "#produtos" },
    { name: "Sobre", href: "/sobre" },
  ];


  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (!section) {
      console.error(`❌ Seção ${id} não encontrada!`);
      return;
    }

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Posição real na página
    const offsetPosition = sectionPosition - headerHeight - 10; // Ajuste com header

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  /* Scroll link */

  /* activeSection */
  const [activeSection, setActiveSection] = useState(links[0]?.href || "/")

  useEffect(() => {
    const updateActiveSection = () => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      let currentSection = pathname; // Começa com a página atual como ativa

      // Se estiver na home, verificamos as âncoras ao invés do pathname
      if (pathname === "/") {
        links.forEach(link => {
          if (!link.href.startsWith("#")) return; // Ignora links externos

          const section = document.querySelector(link.href);
          if (!section) return;

          const rect = section.getBoundingClientRect();
          if (rect.top <= headerHeight + 10 && rect.bottom >= headerHeight + 10) {
            currentSection = link.href;
          }
        });
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection(); // Garante que o estado inicial esteja correto

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [pathname, links]); // Atualiza quando mudar de página
  /* activeSection */
  return { links, pathname, scrollToSection, activeSection }
}
