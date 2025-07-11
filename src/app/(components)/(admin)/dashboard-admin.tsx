"use client"
import { useGetProducts } from "@/app/database/get-produtos"
import { ProductPortugueseType } from "@/app/types/types"
import { Pencil, Plus, Search, Trash } from "lucide-react"
import { redirect } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ProductModal from "./product-modal"
import deleteProduct from "@/app/database/delete-product"
import { toast } from "react-toastify"
import "./style.css"
import Link from "next/link"

export default function DashboardAdmin() {
  const [selectedProduct, setSelectedProduct] = useState<ProductPortugueseType | null>(null)
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null)
  const productRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const { getProducts, setGetProducts } = useGetProducts()
  const [isEditingProduct, setIsEditingProduct] = useState<boolean>(false)

  console.log(setSelectedProduct)

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

  function handleUpdateProduct(updated: ProductPortugueseType) {
    console.log("teste", getProducts)
    setGetProducts((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    )

    if (selectedProduct?.id === updated.id) {
      setSelectedProduct(updated)
      console.log("teste", getProducts.map(data => data))
    }
  }

  function handleEditToggle(product: ProductPortugueseType, index: number) {
    const isSameProduct = selectedProduct?.id === product.id
    const isSameIndex = openModalIndex === index

    if (isSameProduct && isSameIndex) {
      setIsEditingProduct(prev => !prev)
    } else {
      setSelectedProduct(product)
      setOpenModalIndex(index)
      setIsEditingProduct(true)
    }

  }

  const handleSelectProduct = (product: ProductPortugueseType, index: number) => {
    const isSameProduct = selectedProduct?.id === product.id;
    const isSameIndex = openModalIndex === index;

    if (isSameProduct && isSameIndex) {
      setSelectedProduct(null);
      setOpenModalIndex(null);
      setIsEditingProduct(false);
    } else {
      setSelectedProduct(product);
      setOpenModalIndex(index);
      setIsEditingProduct(false); // Sempre abre como visualização
    }
  }



  return (
    <div className="bg-main min-h-screen absolute top-[101px] left-0 right-0 font-inter">
      <section className="flex justify-between flex-row mt-10 mx-6 flex-wrap gap-4">
        <div className="w-full sm:w-auto bg-white flex lg:flex-row items-center gap-1.5 px-2  border-2 border-gray-300 rounded-lg group focus-within:border-cyan-400">
          <Search color="#9CA3AF" size={16} />
          <input
            type="text"
            placeholder="Buscar produtos"
            className="outline-none w-full border-none sm:w-[183px]"
          />
        </div>

        <Link href={"/admin/novo-produto"}>
          <button
            className="bg-button text-white md:text-lg rounded-md flex md:flex-row items-center justify-center w-full lg:w-[200px]  px-3 py-2">
            <Plus /> Novo produto
          </button>
        </Link>
      </section>

      <section className="flex flex-col lg:flex-row lg:justify-between mt-6 mx-6 gap-4 ">
        {/* Lista de Produtos */}
        <aside className="flex flex-col gap-5 w-full lg:w-[40%] h-[407px] overflow-y-auto hiden-scroll">
          {Array.isArray(getProducts) && getProducts.length > 0 ? (
            [...getProducts].reverse().map((product, index) => (
              <div key={product.id}>
                <article
                  ref={(el) => {
                    productRefs.current[product.id] = el as HTMLDivElement | null
                  }}
                  onClick={(e) => {
                    handleSelectProduct(product, index)
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
                        handleEditToggle(product, index)
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
                      isEditing={isEditingProduct}
                      setIsEditing={setIsEditingProduct}
                      onEditToggle={() => {
                        if (selectedProduct && openModalIndex !== null) {
                          handleEditToggle(selectedProduct, openModalIndex);
                        }
                      }}
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
        <div className=" hidden lg:block w-full lg:w-[60%]">
          {selectedProduct !== null ? (
            <ProductModal
              product={selectedProduct}
              onUpdate={handleUpdateProduct}
              isEditing={isEditingProduct}
              setIsEditing={setIsEditingProduct}
              onEditToggle={() => {
                if (selectedProduct && openModalIndex !== null) {
                  handleEditToggle(selectedProduct, openModalIndex)
                }
              }}
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

