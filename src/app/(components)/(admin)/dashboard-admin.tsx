"use client"
import API from "@/app/database/api"
import { useGetProducts } from "@/app/database/get-produtos"
import { ProductPortugueseType } from "@/app/types/types"
import { Pencil, Plus, Search, Trash } from "lucide-react"
import { redirect } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ProductModal from "./product-modal"
import deleteProduct from "@/app/database/delete-product"
import { useModal } from "@/app/contexts/modal-info-product-context"
import { toast } from "react-toastify"

export default function DashboardAdmin() {
  const [selectedProduct, setSelectedProduct] = useState<ProductPortugueseType | null>(null)
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null)
  const productRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const { getProducts, setGetProducts } = useGetProducts()
  // const { editProduct, setEditProduct } = useModal()

  // useEffect(() => {
  //
  // }, [])
  async function handleDelete(id: string) {
    try {
      await deleteProduct(id)

      setGetProducts(getProducts.filter(prev => prev.id !== id))

      if (selectedProduct?.id === id) {
        setSelectedProduct(null)
      }
      toast.success("Produto excluído com sucesso!")
    } catch (error) {
      console.log("Erro ao excluir produtos:", error)
    }
  }

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

        <button onClick={() => redirect("/novo-produto")} className="bg-button text-white md:text-lg rounded-md flex items-center px-3 py-2">
          <Plus /> Novo produto
        </button>
      </section>

      <section className="flex flex-col lg:flex-row lg:justify-between mt-6 gap-4 px-4">
        {/* Lista de Produtos */}
        <aside className="flex flex-col gap-3 w-full lg:w-[40%]">
          {getProducts.length > 0 ? (
            getProducts.map((product, index) => (
              <div key={product.id}>
                <article
                  ref={(el) => {
                    productRefs.current[product.id] = el as HTMLDivElement | null
                  }}
                  onClick={(e) => {
                    // setSelectedProduct(product)
                    selectedProduct?.id === product.id ? setSelectedProduct(null) : setSelectedProduct(product)
                    setOpenModalIndex(index)
                    e.stopPropagation()
                  }}
                  className="flex justify-between items-center bg-white px-4 py-3 rounded-md shadow-md cursor-pointer transition-opacity active:opacity-80"
                >
                  <div className="flex flex-col justify-between w-full">
                    <h3 className="text-sm font-medium text-gray-700">{product.nome}</h3>
                    <p className="text-sm text-gray-500">Climatizadores</p>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Pencil
                      color="#37C7EF"
                      className="transform transition duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                      onClick={(e) => {
                        // setEditProduct(true)
                        setSelectedProduct(product)
                        setOpenModalIndex(index)
                        e.stopPropagation()
                      }} />
                    <Trash
                      color="red"
                      className="transform transition duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                      onClick={(e) => (handleDelete(product.id), e.stopPropagation())}
                    />
                  </div>
                </article>

                {/* Modal mobile (abaixo do item clicado) */}
                {openModalIndex === index && selectedProduct && (
                  <div className="lg:hidden mt-4">
                    <ProductModal
                      product={selectedProduct}
                      onDelete={async (id: string) => {
                        try {
                          setGetProducts(prev => prev.filter(p => p.id !== id))
                          setSelectedProduct(null)
                          setOpenModalIndex(null)
                        } catch (error) {
                          console.error("Erro ao excluir produto:", error)

                        }
                      }}
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white flex justify-center items-center flex-col w-auto py-2 gap-2">
              <p className="text-gray-700 ">Sem produtos cadastrados</p>
              <button
                onClick={() => redirect("/novo-produto")}
                className="bg-button text-white md:text-lg rounded-md flex items-center justify-center px-3 py-2 gap-2 w-1/2">
                <Plus /> Adicionar produtos
              </button>
            </div>
          )}


        </aside>

        {/* Modal desktop (ao lado) */}
        <div className="lg:block w-full lg:w-[60%]">
          {selectedProduct !== null ? (
            <ProductModal
              product={selectedProduct}
              onDelete={async (id: string) => {
                try {
                  setGetProducts(prev => prev.filter(p => p.id !== id))
                  setSelectedProduct(null)
                  setOpenModalIndex(null)
                } catch (error) {
                  console.error("Erro ao excluir produto:", error)

                }
              }}
            />
          ) : (
            <p className="bg-white flex justify-center w-full py-5 rounded-md">clique em um produto</p>
          )}
        </div>
      </section>
    </div>
  )
}

