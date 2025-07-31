"use client"
import React, { ChangeEvent, useCallback, useState } from "react"
import { ImageIcon, Plus, X } from "lucide-react"
import Image from "next/image"
import CardInformation from "@/app/(components)/card-information"
import { DataToSendType } from "@/app/types/types"
import { UseDragEvents } from "@/app/hooks/hook-drag-events"
import { redirect } from "next/navigation"
import { useProductForm } from "@/app/hooks/hook-product-storage"
import EspecificacoesTecnicas from "@/app/(components)/specs/index"
import { toast } from "react-toastify"

export default function NewProduct() {
  const { images, setImages, dragEvents, isDragging, removeImage, fileInputRef, handleFileChange, divRef, handleDivClick } = UseDragEvents()
  const { product, updateProduct, saveProduct } = useProductForm()

  const [caracteristicas, setCaracteristicas] = useState<string[]>([])
  const [beneficios, setBeneficios] = useState<string[]>([])
  const [specificationList, setSpecificationList] = useState<string[]>(["", "", ""])
  const [clearSpecs, setClearSpecs] = useState<boolean>(false)

  const [selectedOption, setSelectedOption] = useState<string>("")

  /* states de erros*/

  const [errorNome, setErrorNome] = useState("")
  const [errorDescrição, setErrorDescricao] = useState("")
  const [errorCaracteristicas, setErrorCaracteristicas] = useState("")
  const [errorBeneficios, setErrorBeneficios] = useState("")
  const [errorSpecifications, setErrorSpecifications] = useState("")
  const [errorCategoria, setErrorCategoria] = useState("")
  const [errorImg, setErrorImg] = useState("")

  /* states de erros*/

  function handleChangeInputCard(title: string, newList: string[]) {
    if (title === "Características Principais") {
      setCaracteristicas(newList)
    } else if (title === "Benefícios") {
      setBeneficios(newList)
    }
  }

  function handleChangeOption(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setErrorCategoria("")
    setSelectedOption(value)
  }

  function handleValideteField() {
    setErrorNome("")
    setErrorImg("")
    setErrorDescricao("")
    setErrorCaracteristicas("")
    setErrorBeneficios("")
    setErrorSpecifications("")
    setErrorCategoria("")

    const specsPreenchidas = specificationList.filter((s) => s.trim() !== "")
    const campos = {
      nome: product?.nome?.trim(),
      descricao: product?.descricao?.trim(),
      caracteristicas,
      beneficios,
      specificationList: specsPreenchidas,
      selectedOption: selectedOption.trim()
    }

    const nenhumPreenchido =
      (!campos.nome || campos.nome === "") &&
      images.length === 0 &&
      (!campos.descricao || campos.descricao === "") &&
      campos.caracteristicas.length === 0 &&
      campos.beneficios.length === 0 &&
      campos.specificationList.length === 0 &&
      campos.selectedOption === ""

    if (nenhumPreenchido) {
      toast.error("Preencha pelo menos um campo antes de enviar!")
      return false
    }

    let isValid = true

    if (!campos.nome) {
      setErrorNome("O nome é obrigatório.")
      isValid = false
    }
    if (images.length === 0) {
      setErrorImg("A imagem é obrigatória")
      isValid = false
    }
    if (!campos.descricao) {
      setErrorDescricao("A descrição é obrigatória.")
      isValid = false
    }
    if (specificationList.length === 0) {
      setErrorCaracteristicas("Adicione todas as característica.")
      isValid = false
    }
    if (campos.beneficios.length === 0) {
      setErrorBeneficios("Adicione pelo menos um benefício.")
      isValid = false
    }
    if (campos.specificationList.length === 0) {
      setErrorSpecifications("Adicione pelo menos uma especificação.")
      isValid = false
    }
    if (campos.selectedOption === "") {
      setErrorCategoria("Selecione uma categoria.")
      isValid = false
    }

    return isValid
  }

  const handleSpecChange = useCallback((value: string[]) => {
    setSpecificationList(value)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const isValid = handleValideteField()

    if (!isValid) return

    const categoryMap: Record<string, string> = {
      Residencial: "7e2636ea-c226-438b-9287-7d5f6776784c",
      Comercial: "cf279eaa-9ff6-485e-932d-16406b6625c2"
    }

    const categoryId = categoryMap[selectedOption]

    const dadosParaEnvio: DataToSendType = {
      name: product.nome,
      description: product.descricao,
      images: images.map(img => img.file).filter((file): file is File => file !== undefined), // ainda é um File, pode ser enviado via FormData
      features: caracteristicas,
      benefits: beneficios,
      specifications: specificationList,
      categoriaId: categoryId
    };

    // console.log("Dados para envio!", dadosParaEnvio)
    try {
      const success = await toast.promise(
        saveProduct(dadosParaEnvio),
        {
          pending: "Enviando produtos...",
          success: "Produto enviado com sucesso!",
          error: "Erro ao enviar o produto!"
        }
      )

      if (success) {
        // ✅ Limpar todos os estados se envio foi bem-sucedido
        setImages([])
        setCaracteristicas([])
        setBeneficios([])
        setSpecificationList(["", "", ""])
        setClearSpecs(true)
        setSelectedOption("")
        updateProduct("nome", "")
        updateProduct("descricao", "")
      }
    } catch (error) {
      console.error("Erro inesperado ao enviar o produto:", error)
    }

    setImages([]);
  }

  return (
    <div className="min-h-[calc(100vh-50px)] pb-12 pt-6 font-inter rounded-md">

      <form onSubmit={handleSubmit} className="flex flex-col  mx-auto px-4  w-full max-w-[1024px]">

        <div className="md:flex ">
          <div className="bg-white flex flex-col rounded-md px-3 flex-1 min-w-0 ">
            <label htmlFor="nameProduct" className="text-sm font-medium text-gray-700 pt-5 pb-1.5">
              Nome do produto *
            </label>
            <input
              type="text"
              id="nameProduct"
              name="nameProduct"
              placeholder="Ex: Climatizador Clin 36"
              className="  rounded-lg outline-cyan-400 border border-gray-300 pb-1.5 mb-5 w-full"
              value={product.nome}
              onChange={(e) => {
                const valor = e.target.value
                updateProduct("nome", valor)
                if (valor.trim() !== "") setErrorNome("")
              }}
            />
            {errorNome && <p className="text-red-500">{errorNome}</p>}
          </div>
          {/* Imagem do Produto */}
          <article className="bg-white pt-5 pb-6 px-3 flex justify-center flex-col gap-2 flex-1 min-w-0" >
            <p className="text-sm font-medium text-gray-700  ">Imagem do Produto</p>
            <div
              {...dragEvents}
              ref={divRef}
              onClick={handleDivClick}
              className={`bg-drag-drop-bg border border-drag-drop-border hover:border-cyan-400 rounded-md  md:w-[450px] h-[250px] pb-2 px-2 flex flex-col justify-center items-center gap-2 pt-5 ${isDragging ? "opacity-50" : "opacity-100"}`}>
              {images.length === 0 ? (
                <>
                  <p className="text-drag-drop-text text-center">Arraste e solte a imagem do produto aqui ou</p>
                  <button type="button" className="text-cyan-400 cursor-pointer outline-none">Selecione um arquivo</button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFileChange(e, setErrorImg)}
                    className="hidden"
                    accept="image/*"
                  />
                  <ImageIcon color="#9CAFAF" width={40} height={40} />
                </>
              ) : (
                images.map(image => (
                  <div className={`relative w-full h-full group ${isDragging ? "opacity-50" : "opacity-100"}`} key={image.name}>
                    <Image src={image.preview} fill style={{ objectFit: "cover" }} alt="image" />
                    <X
                      color="red"
                      className="absolute top-0 right-0 bg-gray-600 hidden group-hover:block cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation() // Impede que o clique na imagem acione o seletor de arquivos
                        removeImage()
                      }}
                    />
                  </div>
                ))
              )}
            </div>
            {errorImg && <p className="text-red-500">{errorImg}</p>}
          </article>
        </div>

        {/* Informações básicas */}
        <section className=" rounded-lg" >

          <div>
            <fieldset className="flex flex-col ">
              <div className="bg-white flex flex-col px-3 py-3 ">
                <label htmlFor="description" className="text-sm font-medium text-gray-700 pb-1.5">
                  Descrição *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  wrap="hard"
                  className=" pt-3  outline-cyan-400 rounded-md border border-gray-300"
                  placeholder="Ex: Climatizador compacto e eficiente para ambientes domésticos."
                  value={product.descricao}
                  onChange={(e) => {
                    const valor = e.target.value
                    updateProduct("descricao", valor)
                    if (valor.trim() !== "") setErrorDescricao("")
                  }}
                />
                {errorDescrição && <p className="text-red-500">{errorDescrição}</p>}
              </div>
            </fieldset>
          </div>


        </section>

        <div className="flex flex-col lg:flex-row">
          <div className="bg-white px-3 flex flex-col md:flex-row gap-4 ">
            <CardInformation
              titleInformation="Características Principais"
              listInformation={caracteristicas}
              onChangeText={handleChangeInputCard}
              addNewInformationPlaceholder="Adicione uma característica"
              error={errorCaracteristicas}
              cleanError={() => setErrorCaracteristicas("")}
            />
            <CardInformation
              titleInformation="Benefícios"
              listInformation={beneficios}
              onChangeText={handleChangeInputCard}
              addNewInformationPlaceholder="Adicione um benefício"
              error={errorBeneficios}
              cleanError={() => setErrorBeneficios("")}
            />

          </div>


          <EspecificacoesTecnicas
            isEditing={true}
            onChangeAll={handleSpecChange}
            error={errorSpecifications}
            clearError={() => setErrorSpecifications}
            clearFields={clearSpecs}
          />

        </div>

        <div className="bg-white flex flex-col gap-3 px-3 py-3  ">
          <h3>Selecione uma categoria</h3>

          <div className="flex gap-6">
            <div className="flex flex-row gap-2 items-center">
              <input
                type="radio"
                id="residential"
                value="Residencial"
                name="categoryMenu"
                checked={selectedOption === "Residencial"}
                onChange={handleChangeOption}
                className="w-4 h-4 text-cyan-600 cursor-pointer accent-cyan-600"
              />
              <label htmlFor="residential">Residencial</label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input
                type="radio"
                id="commercial"
                value="Comercial"
                name="categoryMenu"
                checked={selectedOption === "Comercial"}
                onChange={handleChangeOption}
                className="w-4 h-4 text-cyan-600 cursor-pointer accent-cyan-600"
              />
              <label htmlFor="commercial">Comercial</label>
            </div>
            {errorCategoria && <p className="text-red-500">{errorCategoria}</p>}
          </div>

        </div>
        <div className="flex gap-6 justify-center items-end md:h-1/3 mt-6 md:mt-3">
          <button
            className="h-10 bg-gray-400 text-white px-2 rounded-md hover:opacity-50 active:opacity-100"
            type="button"
            onClick={() => redirect("/")}
          >Cancelar</button>
          <button type="submit" className="h-10 bg-cyan-400 text-white flex justify-center items-center  rounded-md gap-2 px-2"><Plus />Salvar produto</button>
        </div>
      </form >
    </div >
  )
}
