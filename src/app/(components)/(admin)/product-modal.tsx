import { ProductPortugueseType, TypeCardInformation } from "@/app/types/types"
import { Pencil, Trash } from "lucide-react"
import { useState } from "react"
import CardInformation from "../card-information"
import { listCard } from "@/app/data/cards"

type ProductModalType = {
  product: ProductPortugueseType
  onUpdate: (updated: ProductPortugueseType) => void
  onDelete: (id: string) => void
}

export default function ProductModal({ product, onUpdate, onDelete }: ProductModalType) {

  const [isEditing, setIsEditing] = useState(false)
  const [cards] = useState<{ [key: string]: TypeCardInformation }>(listCard)

  const [nome, setNome] = useState(product.nome)
  const [descricao, setDescricao] = useState(product.descricao)
  const [caracteristicas, setCaracteristicas] = useState(product.caracteristicas)
  const [beneficios, setBeneficios] = useState(product.beneficios)
  const [especificacoes, setEspecificacoes] = useState(product?.especificacoes)

  return (
    <div
      className="bg-white border border-gray-300 rounded-xl shadow-md
      w-full max-h-screen overflow-y-auto px-4 sm:px-6 md:px-8 py-6"
    >
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

        {isEditing ? (
          <div className="flex flex-col pb-1">
            <label htmlFor="name">Nome do produto</label>
            <input
              type="text"
              name="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="text-xl border-2 px-2 py-1 border-sky-300 outline-sky-500 rounded-md" />
          </div>
        ) : (
          <h2 className="text-2xl font-bold text-gray-900">{product.nome}</h2>
        )}

        <div className="flex gap-3">
          <Pencil
            color="#37C7EF"
            className="transform transition duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => setIsEditing(true)}
          />
          <Trash
            color="red"
            className="transform transition duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => onDelete(product.id)}
          />
        </div>
      </header>

      <div className="w-full flex justify-center mt-6">
        <img
          src={product.urlImage || undefined}
          alt="Imagem do produto"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      {isEditing ? (
        <div className="flex flex-col pb-1">
          <label htmlFor="description">Descrição do produto</label>
          <input
            type="text"
            name="description"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="text-xl border-2 px-2 py-1 border-sky-300 outline-sky-500 rounded-md w-[300px]" />
        </div>
      ) : (
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Descrição</h3>
          <p className="mt-2 text-gray-600">{product.descricao}</p>
        </section >

      )}

      {isEditing ? (
        <div>
          {/* <CardInformation */}
          {/*   titleInformation={`${cards.featuresMain.titleInformation}`} */}
          {/*   listInformation={cards.featuresMain.listInformation} */}
          {/*   addNewInformationPlaceholder={cards.featuresMain.addNewInformationPlaceholder} */}
          {/* /> */}
        </div>
      ) : (
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Características principais</h3>
          <ul className="mt-2 space-y-2">
            {product.caracteristicas?.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Benefícios</h3>
        <ul className="mt-2 space-y-2">
          {product.beneficios?.map((char, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
              {char}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Especificações Técnicas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {Object.entries(product.especificacoes ?? {}).map(([spec, value]) => (
            <div key={spec} className="bg-gray-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{spec}</p>
              <p className="text-base font-bold text-gray-900">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div >
  )
}
