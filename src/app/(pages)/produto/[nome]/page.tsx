import API from "@/app/database/api"
import { ProductPortugueseType } from "@/app/types/types"
import Image from "next/image"
import Link from "next/link"

export interface PageProps {
  params: { nome: string }
  searchParams: { id: string }
}
export default async function InfoProduct({ params, searchParams }: PageProps) {
  const id = searchParams.id

  const response = await fetch(`${API}/allProdutos`);
  const data = await response.json();

  const products = data.produtos as ProductPortugueseType[]

  console.log("id product", id)
  const product = products.find((p) => p.id === "622d4d2a-d18a-4af8-81b1-83d34544d316")
  if (!product) return <h1>Produto não encontrado</h1>;

  const labels = [
    "Consumo elétrico (KW)",
    "Área atendida",
    "Capacidade do tanque"
  ]

  return (
    <section className=" bg-main border-[20px] border-main flex flex-col items-center  rounded-md">
      <div className="bg-white flex flex-col md:w-4/5 md:flex-row desktop-1366:flex-row desktop-1366:h-auto desktop-1366:w-4/5 desktop-1559:flex-row items-center text-left rounded-md">

        <div className="w-full md:w-1/2 flex justify-center self-center p-4 ">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src={`${product?.urlImage}`}
              alt={`Imagem de ${product?.nome}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col font-montserrat">
          <h1 className="text-3xl text-title-produto-info font-semibold pl-1.5">{product?.nome}</h1>
          <p className="text-produto-info px-1.5 md:w-[450px] text-xl ">{product?.descricao}</p>
          <div className="pt-3">
            <h2 className="text-2xl md:text-[26px] font-medium text-subtitle-produto-info mx-1.5">Características principais</h2>
            <ul className="list-disc pl-8 mx-5 m-bottom-5 text-left">
              {product?.caracteristicas.map((mainFeature, index) => (
                <li className="text-lg text-sub-text-produto-info" key={index}>{mainFeature}</li>))}
            </ul>

            <Link className="text-lg text-center md:text-xl text-white bg-button font-semibold px-3 py-3 mx-3 my-2 mt-4 rounded-md block" href="https://wa.me/5577999827672?text=Ol%C3%A1%2C%20climatize!">Solicitar Preço e Disponibilidade via WhatsApp</Link>
          </div>
        </div>

      </div>

      <div className="bg-white w-full md:w-4/5 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-montserrat">

          {/* Características Principais */}
          <div className="bg-zinc-100 rounded-xl p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-title-produto-info">Características Principais</h3>
            <ul className="ml-4 list-disc space-y-2">
              {product?.caracteristicas?.map((item, index) => (
                <li key={index} className="text-sub-text-produto-info text-lg">{item}</li>
              ))}
            </ul>
          </div>

          {/* Benefícios */}
          <div className="bg-zinc-100 rounded-xl p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-title-produto-info">Benefícios</h3>
            <ul className="ml-4 list-disc space-y-2">
              {product?.beneficios?.map((benefit, index) => (
                <li key={index} className="text-sub-text-produto-info text-lg">{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Especificações Técnicas */}
          <div className="bg-zinc-100 rounded-xl p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-title-produto-info">Especificações Técnicas</h3>
            <ul className="ml-4 list-disc space-y-2">
              {Object.entries(product?.especificacoes ?? {}).map(([value], index) => (
                <li key={index} className="text-sub-text-produto-info text-lg">
                  <strong>{labels[index]}</strong>: {value}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </section>
  )
}
