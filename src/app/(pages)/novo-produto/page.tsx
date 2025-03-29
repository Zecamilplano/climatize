"use client"
import React, { useEffect, useState } from "react"
import { ImageIcon, Plus, X } from "lucide-react"
import Image from "next/image"
import CardInformation from "@/app/(components)/card-information"
import { TypeCardInformation } from "@/app/types/types"
import { listCard } from "@/app/data/cards"
import "./style.css"
import { UseDragEvents } from "@/app/hooks/hook-drag-events"
import HooksCardInformation from "@/app/hooks/hook-card-information"
import useProductStorage from "@/app/hooks/hook-product-storage"
import { redirect } from "next/navigation"
import { useImageStorage } from "@/app/hooks/hook-image-storage"

export default function NewProduct() {
  const [cards] = useState<{ [key: string]: TypeCardInformation }>(listCard)
  const { images, dragEvents, isDragging, removeImage, fileInputRef, handleFileChange, divRef, handleDivClick } = UseDragEvents()
  const { product, updateProduct, cleanProduct } = useProductStorage()

  return (
    <div className="min-h-[calc(100vh-50px)] pb-12 font-inter">
      <div className="mx-3 py-10">
        <h1 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-800">Adicionar Novo Produto</h1>
        <p className="text-gray-600 mt-1">Preencha os detalhes para adicionar um novo produto à sua loja</p>
      </div>

      <form className="mx-3 grid md:gap-8 grid-cols-1 grid-form">
        {/* Imagem do Produto */}
        <article className="bg-white pb-6 rounded " style={{ gridArea: 'img' }}>
          <h2 className="text-xl font-medium text-gray-800 px-2 py-2">Imagem do Produto</h2>
          <div
            {...dragEvents}
            ref={divRef}
            onClick={handleDivClick}
            className={`bg-drag-drop-bg border-dashed border-drag-drop-border border-2 hover:border-cyan-400 rounded-md  w-auto h-[500px] pb-2 mx-2 flex flex-col justify-center items-center gap-2 ${isDragging ? "opacity-50" : "opacity-100"}`}>
            {images.length === 0 ? (
              <>
                <p className="text-drag-drop-text text-center">Arraste e solte a imagem do produto aqui ou</p>
                <button type="button" className="text-cyan-400 cursor-pointer outline-none">Selecione um arquivo</button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                <ImageIcon color="#9CA3AF" width={40} height={40} />
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
        </article>

        {/* Informações básicas */}
        <section className="bg-white rounded-lg p-4 " style={{ gridArea: 'info' }}>
          <header>
            <h2 className="text-xl font-medium text-gray-800">Informações básicas</h2>
          </header>

          <form>
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="nameProduct" className="text-sm font-medium text-gray-700">
                Nome do produto *
              </label>
              <input
                type="text"
                id="nameProduct"
                name="nameProduct"
                placeholder="Ex: Climatizador Clin 36"
                className="px-2 py-3 rounded-lg outline-cyan-400 border border-gray-300"
                value={product.nome}
                onChange={(e) => updateProduct("nome", e.target.value)}
              />

              <label htmlFor="description" className="text-sm font-medium text-gray-700">
                Descrição *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                wrap="hard"
                className="px-2 pt-3 w-full outline-cyan-400 rounded-md border border-gray-300"
                placeholder="Ex: Climatizador compacto e eficiente para ambientes domésticos."
                value={product.descricao}
                onChange={(e) => updateProduct("descricao", e.target.value)}

              />
            </fieldset>
          </form>

          <CardInformation
            titleInformation={cards.featuresMain.titleInformation}
            listInformation={cards.featuresMain.listInformation}
            addNewInformationPlaceholder={cards.featuresMain.addNewInformationPlaceholder}
            noPaddingX={true}
          />

        </section>

        <section style={{ gridArea: "benefits" }}>
          <div >
            <CardInformation
              titleInformation={cards.benefits.titleInformation}
              listInformation={cards.benefits.listInformation}
              addNewInformationPlaceholder={cards.benefits.addNewInformationPlaceholder}
            />
          </div>

          <div >
            <CardInformation
              titleInformation={cards.technicalSpecification.titleInformation}
              listInformation={cards.technicalSpecification.listInformation}
              addNewInformationPlaceholder={cards.technicalSpecification.addNewInformationPlaceholder}
            />
          </div>

          <div className="flex gap-6 justify-center items-end md:h-1/3 md:mt-3">
            <button
              className="h-10 bg-white w-fit px-6 rounded-md"
              type="button"
              onClick={() => {
                // HooksCardInformation("Características Principais").clearAllStorage()
                // HooksCardInformation("Benefícios").clearAllStorage()
                // HooksCardInformation("Especificações").clearAllStorage()
                redirect("/")
              }}
            >Cancelar</button>
            <button type="button" onClick={() => console.log()} className="h-10 bg-cyan-400 text-white flex justify-center items-center px-6 rounded-md gap-2"><Plus />Salvar produto</button>
          </div>

        </section>
      </form>
    </div >
  )
}
