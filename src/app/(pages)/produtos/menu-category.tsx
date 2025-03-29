"use client"
import { useMenu } from "@/app/contexts/menu-context"
import { Building2, Home } from "lucide-react"

export function MenuCategory() {
  const { activeCategory, setActiveCategory } = useMenu()

  return (
    <div
      id="category-menu"
      className="w-[90%] bg-menu flex justify-self-center gap-9 font-sans sticky top-0 left-0 md:sticky md:top-[104px] md:left-0 z-10 rounded-md"
    >
      {["residencial", "comercial"].map(category => (
        <section
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`w-1/2 cursor-pointer py-4 text-center flex items-center justify-center relative transition-all duration-300 outline-none
            ${activeCategory === category ?
              (category === "residencial" ? "bg-menu-selected font-bold rounded-l-md" : "bg-menu-selected font-bold rounded-r-md")
              : "text-menu-unselected"}
          `}
        >
          <button
            className="w-auto text-lg font-medium text-white flex gap-1 transition-all duration-300 outline-none"
          >
            {category === "residencial" ? <Home /> : <Building2 />}
            {category === "residencial" ? "Residenciais" : "Comerciais"}
          </button>
        </section>
      ))}
    </div>
  )
}
