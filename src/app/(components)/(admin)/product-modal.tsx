import { ProductPortugueseType, productUpdateType } from "@/app/types/types"
import { Pencil, Trash } from "lucide-react"
import React, { useEffect, useState } from "react"
import CardInformation from "../card-information"
import EspecificacoesTecnicas from "../specs/index"
import editProduct from "@/app/database/edit-product"
import { toast } from "react-toastify"
import { dadosForamAlterados } from "@/app/ultils/compare"

type ProductModalType = {
  key?: string
  product: ProductPortugueseType
  onUpdate?: (updated: ProductPortugueseType) => void
  isEditing?: boolean
  editingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  onDelete: (id: string) => void
}

export default function ProductModal({ key, product, editingState, onDelete }: ProductModalType) {
  const [isEditing, setIsEditing] = editingState
  console.log("editando", isEditing)

  // const [isEditing, setIsEditing] = useState<boolean>(false)
  // const [editToggle, setEditToggle] = useState(onEditToggle)

  const [productId] = useState(product.id)
  const [nome, setNome] = useState(product.nome)
  const [descricao, setDescricao] = useState(product.descricao)
  const [caracteristicas, setCaracteristicas] = useState(product.caracteristicas)
  const [beneficios, setBeneficios] = useState(product.beneficios)
  const [especificacoes, setEspecificacoes] = useState<string[]>(product?.especificacoes)
  const [specificationList, setSpecificationList] = useState<string[]>([])
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const [selectedOption, setSelectedOption] = useState<string>(product.categoria?.nome || "")
  const categoryMap: Record<string, string> = {
    Residencial: "3341f0c4-585c-48e9-bab6-72ee5a23f9d6",
    Comercial: "3c134c8e-aef2-4f20-995f-8942afe4391f"
  }

  function handleChangeInput(title: string, newList: string[]) {
    if (title === "Características Principais") {
      setCaracteristicas(newList)
    } else if (title === "Benefícios") {
      setBeneficios(newList)
    } else if (title === "Especificações Técnicas") {
      setEspecificacoes(newList)
    }
  }

  async function handleUpdateProduct() {
    // console.log("Botão clicado", e)
    if (isSaving) return
    setIsSaving(true)

    const categoryId = categoryMap[selectedOption]

    const dataToSend: productUpdateType = {
      id: productId,
      categoryId,
      name: nome,
      description: descricao,
      features: caracteristicas,
      benefits: beneficios,
      specs: specificationList
    }

    const originalData = {
      id: product.id,
      categoryId,
      name: product.nome,
      description: product.descricao,
      features: product.caracteristicas,
      benefits: product.beneficios,
      specs: product.especificacoes,
    }


    try {
      if (dadosForamAlterados(dataToSend, originalData)) {
        await toast.promise(
          editProduct(dataToSend),
          {
            pending: `Enviando a edição do produto ${product.nome}...`,
            success: `Edição do produto ${product.nome} feita com sucesso!`,
            error: `Erro ao enviar a edição do produto ${product.nome}`
          }
        )
      } else {
        toast.warn("Nenhuma alteração feita.")
      }
    } catch (error) {
      console.error("Erro ao editar produto:", error)
    } finally {
      setIsSaving(false)
      localStorage.clear()
    }

  }

  useEffect(() => {
    setNome(product.nome)
    setDescricao(product.descricao)
    setCaracteristicas(product.caracteristicas)
    setBeneficios(product.beneficios)
    setEspecificacoes(product.especificacoes)
    setSelectedOption(product.categoria?.nome || "")
  }, [product])


  // useEffect(() => {
  //   if (isEditing) {
  //     setCaracteristicas(product.caracteristicas)
  //     setBeneficios(product.beneficios)
  //     setEspecificacoes(product.especificacoes)
  //   }
  // }, [onEditToggle, isEditing])


  return (
    <div
      className="bg-white border border-gray-300 rounded-xl shadow-md
      w-full h-[400px]  overflow-y-auto px-4 sm:px-6 md:px-8 py-6 "
      key={key}
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

          <button
            onClick={() => setIsEditing((prev) => !prev)}
            className="transform transition duration-200 scale-105 active:scale-95 cursor-pointer"
            title={isEditing ? "sair do modo de edição" : "Editar"}
          >
            <Pencil color="#37C7EF" />
          </button>

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
        <div className="flex flex-col py-6 ">
          <label htmlFor="description">Descrição do produto</label>
          <input
            type="text"
            name="description"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="text-xl border-2 px-2 py-1 border-sky-300 outline-sky-500 rounded-md w-[300px]" />
        </div>
      ) : (
        <section className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900">Descrição</h3>
          <p className="mt-2 text-gray-600">{product.descricao}</p>
        </section >

      )}

      {isEditing ? (
        <CardInformation
          titleInformation="Características Principais"
          listInformation={caracteristicas}
          onChangeText={handleChangeInput}
          addNewInformationPlaceholder="Adicione uma característica"
          paddingBottom={true}
        />
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

      {isEditing ? (
        <CardInformation
          titleInformation="Benefícios"
          listInformation={beneficios}
          onChangeText={handleChangeInput}
          addNewInformationPlaceholder="Adicione um benefício"
          paddingBottom={true}
        />
      ) : (
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

      )}

      {isEditing ? (
        <section className="bg-white">

          <div className="bg-white pt-3 rounded-md pb-2">
            <EspecificacoesTecnicas
              isEditing={isEditing}
              dadosAnteriores={especificacoes}
              onChangeAll={(value) => setSpecificationList(value)}
            />
          </div>
        </section>
      ) : (
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Especificações Técnicas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {product.especificacoes?.map((value, index) => {
              const label = ["Consumo elétrico (KW)", "Área atendida", "Capacidade do tanque"]
              const title = label[index] || `Especificação ${index + 1}`

              return (
                <div key={index} className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-500">{title}</p>
                  <p className="text-base font-bold text-gray-900">
                    {title === "Área atendida" ? (
                      <>
                        {value}<sup>2</sup>
                      </>
                    ) : (
                      value
                    )}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {isEditing ? (
        <>
          <h3 className="block text-lg font-semibold text-gray-900">Selecione categoria</h3>
          <div className="flex gap-6 pl-3 py-3">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
            </select>
          </div>
        </>
      ) : (
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Categoria</h3>
          {selectedOption}
        </section>
      )}

      {isEditing ? (

        <button
          className={`bg-button text-white md:text-lg rounded-md flex items-center px-3 py-2 transition-opacity
                      ${isSaving ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}`}
          onClick={handleUpdateProduct}
        >
          {isSaving ? "Salvando..." : "Salvar produto"}
        </button>
      ) : (
        <></>
      )}
    </div >
  )
}
