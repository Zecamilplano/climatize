"use client"
import { useMenu } from "@/app/contexts/menu-context"

export function MenuResidentialCommercial() {
  const { activeCategory, setActiveCategory } = useMenu()

  return (
    <div
      id="category-menu"
      className={` w-[90%] bg-gray px-4 flex justify-self-center gap-9 font-sans sticky top-[130px] left-0 `}>
      <section
        onClick={() => setActiveCategory("residencial")}
        className={`w-1/2 cursor-pointer text-center py-2 my-2 ${activeCategory === "residencial" ? "bg-white" : "bg-gray"
          }`}
      >
        <button
          className={`w-auto ${activeCategory === "residencial" ? "text-black" : "text-menu-unselected"}`}>Residênciais</button>
      </section>

      <section
        className={`w-1/2 text-center py-2 my-2 cursor-pointer ${activeCategory === "comercial" ? "bg-white" : "bg-gray-200"
          } `}
        onClick={() => setActiveCategory("comercial")}
      >
        <button
          className={`w-auto font-sans ${activeCategory === "comercial" ? "text-black" : "text-menu-unselected"
            }`}
        >
          Comerciais
        </button>
      </section>
    </div>
  )
}

