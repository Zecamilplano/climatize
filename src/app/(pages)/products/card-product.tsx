"use client"
import { useMenu } from "@/app/contexts/menu-context"
import { useProduct } from "@/app/hooks/hook-products"
import Image from "next/image"
import { useEffect } from "react"
import { MenuResidentialCommercial } from "./menu-category"
import Link from "next/link"
import { listProducts } from "@/app/data/product"

export function CardProduct() {
  const { products } = useProduct(listProducts)
  const { activeCategory } = useMenu()

  const filteredProducts = products.filter(product => product.sectionArea === activeCategory)

  useEffect(() => console.log(activeCategory), [])

  return (
    <>
      <MenuResidentialCommercial />
      <div className="products-grid flex flex-row flex-wrap justify-center gap-8 gap-y-0 md:pb-1">
        <div className="bg-main overflow-scroll pt-14 font-sans flex flex-row gap-9 flex-wrap justify-center">
          {filteredProducts.map(product => (
            <article key={product.id} className="bg-white w-80 flex flex-col flex-wrap text-center mt-5 justify-center">
              <Image
                src={product.srcProduct || "/logo.png"}
                alt={`produto ${product.nameProduct}`}
                width={176}
                height={176}
                priority={true}
                className="w-44 flex self-center" />
              <h2 className="text-xl font-medium text-card-product">{product.nameProduct}</h2>
              <Link
                href={`/products/1`}
                className="bg-button mx-3 rounded text-white text-xl py-2 hover:opacity-70 active:opacity-50 mb-3 outline-none">{product.textButton}</Link>
            </article>
          ))}
        </div>
      </div >
    </>
  )
}
