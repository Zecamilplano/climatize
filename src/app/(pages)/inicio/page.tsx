"use client"
import { useHeader } from "@/app/hooks/hook-header-scroll";
import { House, Settings, ShoppingCart } from "lucide-react";

export default function HomeComponent() {
  const { links, scrollToSection } = useHeader()

  return (
    <section id="inicio" className="bg-main flex gap-6 md:gap-7 flex-wrap justify-center items-center md:h-[100dvh] py-5">

      <article onClick={() => scrollToSection(links[1].href)} className="bg-white self-center rounded-md flex justify-center items-center text-center flex-col w-[360px] h-[180px] gap-2 desktop-2560:w-[618px] desktop-2560:h-[290px] desktop-2560:gap-6  transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow-sm ">
        <ShoppingCart className="w-8 h-8 desktop-2560:w-16 " color={"#7283DB"} />
        <h3 className="text-title-card-main text-3xl font-medium desktop-2560:text-[43px]">Venda</h3>
        <p className="text-card-main text-xl desktop-2560:font-[32px]">Produtos de qualidade para sua casa.</p>
      </article>

      <article className="bg-white self-center rounded-md flex justify-center items-center text-center flex-col w-[360px] h-[180px] gap-2 desktop-2560:w-[618px] desktop-2560:h-[290px] desktop-2560:gap-6 transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow-sm">
        <Settings className="w-8 h-8 desktop-2560:w-16 " color={"#7283DB"} />
        <h3 className="text-title-card-main text-3xl font-medium desktop-2560:text-[43px]">Instalação</h3>
        <p className="text-card-main text-xl">Serviços profissionais e garantido.</p>
      </article>

      <article className="bg-white self-center rounded-md flex justify-center items-center text-center flex-col w-[360px] h-[180px] gap-2 desktop-2560:w-[618px] desktop-2560:h-[290px] desktop-2560:gap-6 transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow-sm">
        <House className="w-8 h-8 desktop-2560:w-16 " color={"#7283DB"} />
        <h3 className="text-title-card-main text-3xl font-medium desktop-2560:text-[43px]">Manutenção</h3>
        <p className="text-card-main text-xl">Assistencia técnica especializada.</p>
      </article>

    </section>
  )
}
