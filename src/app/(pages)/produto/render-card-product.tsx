"use client"
import { useMenu } from "@/app/contexts/menu-context"
import { MenuCategory } from "./menu-category"
import { CardProduct } from "@/app/(components)/card-product"
import { useCategoryProducts } from "@/app/hooks/use-category-products"

export function RenderCardProduct() {
  const { activeCategory } = useMenu()
  const product = useCategoryProducts(activeCategory)

  function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-")
  }

  return (
    <>
      <MenuCategory />
      <div className="flex flex-wrap justify-center gap-8 bg-main">
        {product?.map(product => (
          <CardProduct
            key={product.id}
            nome={product.nome}
            urlImage={`${product.urlImage}`}
            href={{ link: "/produto/" + slugify(product.nome), id: product.id }}
          />
        ))}
      </div>
    </>
  )
}
