"use client"
import { listProducts } from "@/app/data/product"
import { TypeProduct } from "@/app/types/types"
import { Pencil, Plus, Search, Trash, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function DashboardAdmin() {
  const [selectedProduct, setSelectedProduct] = useState<TypeProduct | null>(null)
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null)
  const productRefs = useRef<Record<number, HTMLDivElement | null>>({})

  return (
    <div className="bg-main min-h-screen absolute top-[101px] left-0 right-0 font-inter">
      <section className="flex justify-between mt-10 mx-6 flex-wrap gap-4">
        <div className="w-full sm:w-auto bg-white flex items-center gap-2 pl-2 py-2 border-2 border-gray-300 rounded-lg group focus-within:border-cyan-400">
          <Search color="#9CA3AF" size={16} />
          <input
            type="text"
            placeholder="Buscar produtos"
            className="outline-none w-full sm:w-[183px]"
          />
        </div>

        <button className="bg-button text-white md:text-lg rounded-md flex items-center px-3 py-2">
          <Plus /> Novo produto
        </button>
      </section>

      <section className="flex flex-col lg:flex-row lg:justify-between mt-6 gap-4 px-4">
        {/* Lista de Produtos */}
        <aside className="flex flex-col gap-3 w-full lg:w-[40%]">
          {listProducts.map((product, index) => (
            <div key={product.id}>
              <article
                ref={(el) => {
                  productRefs.current[product.id] = el as HTMLDivElement | null
                }}
                onClick={() => {
                  setSelectedProduct(product)
                  setOpenModalIndex(index)
                }}
                className="flex justify-between items-center bg-white px-4 py-3 rounded-md shadow-md cursor-pointer transition-opacity active:opacity-80"
              >
                <div className="flex flex-col justify-between w-full">
                  <h3 className="text-sm font-medium text-gray-700">{product.nameProduct}</h3>
                  <p className="text-sm text-gray-500">Climatizadores</p>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Pencil color="#37C7EF" />
                  <Trash color="red" />
                </div>
              </article>

              {/* Modal mobile (abaixo do item clicado) */}
              {openModalIndex === index && selectedProduct && (
                <div className="lg:hidden mt-4">
                  <ProductModal product={selectedProduct} />
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Modal desktop (ao lado) */}
        <div className="hidden lg:block w-full lg:w-[60%]">
          {selectedProduct && <ProductModal product={selectedProduct} />}
        </div>
      </section>
    </div>
  )
}

// Componente separado para o modal
function ProductModal({ product }: { product: TypeProduct }) {
  return (
    <div
      className="bg-white border border-gray-300 rounded-xl shadow-md
        w-full max-h-screen overflow-y-auto px-4 sm:px-6 md:px-8 py-6"
    >
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h2 className="text-2xl font-bold text-gray-900">{product.nameProduct}</h2>

        <div className="flex gap-3">
          <Pencil color="#37C7EF" />
          <Trash color="red" />
        </div>
      </header>

      <div className="w-full flex justify-center mt-6">
        <Image
          src={product.srcProduct}
          alt="Imagem do produto"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <section className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Descrição</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Características principais</h3>
        <ul className="mt-2 space-y-2">
          {product.mainFeatures.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Características</h3>
        <ul className="mt-2 space-y-2">
          {product.technicalFeatures.map((char, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
              {char}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Benefícios</h3>
        <ul className="mt-2 space-y-2">
          {product.benefits.map((char, index) => (
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
          {Object.entries(product.technicalSpecifications).map(([spec, value]) => (
            <div key={spec} className="bg-gray-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{spec}</p>
              <p className="text-base font-bold text-gray-900">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    //   <div className="bg-main min-h-screen absolute top-[101px] left-0 right-0 font-inter">
    //
    //     {/* Topo */}
    //     <section className="flex justify-between mt-10 mx-6 flex-wrap gap-4">
    //       <div className="w-full sm:w-auto bg-white flex items-center gap-2 pl-2 py-2 border-2 border-gray-300 rounded-lg group focus-within:border-cyan-400">
    //         <Search color="#9CA3AF" size={16} />
    //         <input
    //           type="text"
    //           placeholder="Buscar produtos"
    //           className="outline-none w-full sm:w-[183px]"
    //         />
    //       </div>
    //
    //       <button className="bg-button text-white md:text-lg rounded-md flex items-center px-3 py-2">
    //         <Plus /> Novo produto
    //       </button>
    //     </section>
    //
    //     {/* Conteúdo principal */}
    //     <section className="flex flex-col lg:flex-row lg:justify-between mt-6 gap-4 px-4">
    //
    //       {/* Lista de produtos */}
    //       <aside className="flex flex-col gap-3 w-full lg:w-[40%]">
    //         {listProducts.map(product => (
    //           <article
    //             key={product.id}
    //             className="flex justify-between items-center bg-white px-4 py-3 rounded-md shadow-md cursor-pointer transition-opacity active:opacity-80"
    //             onClick={(e) => handleClickProduct(e, product)}
    //           >
    //             <div
    //               ref={(el) => { refProducts.current[product.id] = el }}
    //               className="flex flex-col justify-between w-full"
    //             >
    //               <h3 className="text-sm font-medium text-gray-700">{product.nameProduct}</h3>
    //               <p className="text-sm text-gray-500">Climatizadores</p>
    //             </div>
    //
    //             <div className="flex items-center gap-2 ml-4">
    //               <Pencil color="#37C7EF" />
    //               <Trash color="red" />
    //             </div>
    //           </article>
    //         ))}
    //       </aside>
    //
    //       {/* Mensagem alternativa */}
    //       <section className="w-full lg:w-[58%] bg-white rounded-xl shadow-md p-6 text-center text-gray-600">
    //         Selecione um produto para ver os detalhes
    //       </section>
    //     </section>
    //
    //     {/* Modal fora da estrutura flex */}
    //     {openModal && selectProduct && (
    //       <div
    //         className=" bg-white rounded-xl shadow-lg p-6 w-[90%] sm:w-[500px] max-w-[90%] flex flex-col"
    //       // style={{
    //       //   top: `${modalPosition.top}px`,
    //       //   left: `${modalPosition.left}px`,
    //       //   // transform: "translateX(-50%)"
    //       // }}
    //       >
    //         <header className="flex justify-between items-start mb-4">
    //           <h2 className="text-xl font-semibold">{selectProduct.nameProduct}</h2>
    //           <button onClick={() => setModal(false)} className="text-red-500 font-bold text-lg">
    //             <X />
    //           </button>
    //         </header>
    //
    //         <Image
    //           src={selectProduct.srcProduct}
    //           alt="Imagem do produto"
    //           width={400}
    //           height={400}
    //           className="object-contain mx-auto"
    //         />
    //
    //         <section className="mt-4">
    //           <h3 className="text-lg font-semibold text-gray-900">Descrição</h3>
    //           <p className="mt-2 text-gray-600">{selectProduct.description}</p>
    //         </section>
    //
    //         <section className="mt-4">
    //           <h3 className="text-lg font-semibold text-gray-900">Características principais</h3>
    //           <ul className="mt-2 space-y-2">
    //             {selectProduct.mainFeatures.map((feature, index) => (
    //               <li key={index} className="flex items-center text-gray-600">
    //                 <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>
    //         </section>
    //
    //         <section className="mt-4">
    //           <h3 className="text-lg font-semibold text-gray-900">Características</h3>
    //           <ul className="mt-2 space-y-2">
    //             {selectProduct.technicalFeatures.map((char, index) => (
    //               <li key={index} className="flex items-center text-gray-600">
    //                 <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
    //                 {char}
    //               </li>
    //             ))}
    //           </ul>
    //         </section>
    //
    //         <section className="mt-4">
    //           <h3 className="text-lg font-semibold text-gray-900">Benefícios</h3>
    //           <ul className="mt-2 space-y-2">
    //             {selectProduct.benefits.map((char, index) => (
    //               <li key={index} className="flex items-center text-gray-600">
    //                 <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
    //                 {char}
    //               </li>
    //             ))}
    //           </ul>
    //         </section>
    //
    //         <section className="mt-4">
    //           <h3 className="text-lg font-semibold text-gray-900">Especificações Técnicas</h3>
    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
    //             {Object.keys(selectProduct.technicalSpecifications).map((spec) => (
    //               <div key={spec} className="bg-gray-100 rounded-xl p-4">
    //                 <p className="text-sm text-gray-500">{spec}</p>
    //                 <p className="text-base font-bold text-gray-900">
    //                   {selectProduct.technicalSpecifications[spec]}
    //                 </p>
    //               </div>
    //             ))}
    //           </div>
    //         </section>
    //       </div>
    //     )}
    //   </div>
    //
  )
}
