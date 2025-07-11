"use client"
import { useMenu } from "@/app/contexts/menu-context"
import { useProduct } from "@/app/hooks/hook-products"
import { useEffect } from "react"
import { MenuCategory } from "./menu-category"
import { listProducts } from "@/app/data/product"
import { CardProduct } from "@/app/(components)/card-product"
import { useGetProducts } from "@/app/database/get-produtos"


export function RenderCardProduct() {
  const { products } = useProduct(listProducts)
  const { activeCategory } = useMenu()
  const { getProducts } = useGetProducts()
  console.log("teste ", getProducts.map(data => data))

  const filteredProducts = products.filter(product => product.sectionArea === activeCategory)

  // useEffect(() => {
  //   console.log("Categoria ativa:", activeCategory)
  //   console.log("Produtos disponíveis:", products)
  // }, [activeCategory, products])
  return (
    <>
      <MenuCategory />
      <div className="flex flex-wrap justify-center gap-8 bg-main">
        {getProducts.map(product => (
          <CardProduct
            key={product.id}
            nome={product.nome}
            urlImage={`${product.urlImage}`}
            href={`/produtos/${product.id}`}

          />
        ))}
      </div>
    </>
  )
}

