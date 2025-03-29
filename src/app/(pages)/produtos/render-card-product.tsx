"use client"
import { useMenu } from "@/app/contexts/menu-context"
import { useProduct } from "@/app/hooks/hook-products"
import { useEffect } from "react"
import { MenuCategory } from "./menu-category"
import { listProducts } from "@/app/data/product"
import { CardProduct } from "@/app/(components)/card-product"

export function RenderCardProduct() {
  const { products } = useProduct(listProducts)
  const { activeCategory } = useMenu()

  const filteredProducts = products.filter(product => product.sectionArea === activeCategory)

  useEffect(() => {
    console.log("Categoria ativa:", activeCategory)
    console.log("Produtos disponíveis:", products)
  }, [activeCategory, products])
  return (
    <>
      <MenuCategory />
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProducts.map(product => (
          <CardProduct
            key={product.id}
            nameProduct={product.nameProduct}
            srcProduct={`${product.srcProduct}`}
            href={`/produtos/${product.id}`}
          />
        ))}
      </div>
    </>
  )
}
