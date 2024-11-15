import { House, Settings, ShoppingCart } from "lucide-react";

export function MainHome() {
  return (
    <main className="flex bg-main w-screen h-screen items-center justify-center">
      <section className=" flex gap-12 ">

        <article className="bg-white rounded-md flex justify-center items-center text-center flex-col w-[370px] h-[180px] gap-2 ">
          <ShoppingCart size={32} color={"#7283DB"} />
          <h3 className="text-title-card-main text-3xl font-medium">Venda</h3>
          <p className="text-card-main text-xl">Produtos de qualidade para sua casa.</p>
        </article>

        <article className="bg-white rounded-md flex justify-center items-center text-center flex-col w-[370px] h-[180px] gap-2">
          <Settings size={32} color={"#7283DB"} />
          <h3 className="text-title-card-main text-3xl font-medium">Instalação</h3>
          <p className="text-card-main text-xl">Serviços profissionais e garantido.</p>
        </article>

        <article className="bg-white rounded-md flex justify-center items-center text-center flex-col w-[376px] h-[180px] gap-2">
          <House size={32} color={"#7283DB"} />
          <h3 className="text-title-card-main text-3xl font-medium">Manutenção</h3>
          <p className="text-card-main text-xl">Assistencia técnica especializada.</p>
        </article>

      </section>
    </main>
  )
}
