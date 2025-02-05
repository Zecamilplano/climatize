"use client"
import { useProduct } from "@/app/hooks/hook-products"
import Image from "next/image"

export function CardProduct() {
  const { products } = useProduct()

  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 gap-y-0 md:pb-1">
      <div className="bg-main h-96 overflow-scroll pt-14 font-sans flex flex-row items-center gap-9 ">
        {products.map((product) => (
          <article key={product.id} className="bg-white w-80 flex flex-col flex-wrap text-center mt-5 justify-center">
            <Image
              src={product.srcProduct}
              alt={`produto ${product.nameProduct}`}
              width={176}
              height={176}
              className="w-44 flex self-center" />
            <h2 className="text-xl font-medium text-card-product">{product.nameProduct}</h2>
            <button className="bg-button mx-3 rounded text-white text-xl py-2 hover:opacity-70 active:opacity-50 mb-3 outline-none">{product.textButton}</button>
          </article>
        ))}
      </div>
    </div >
  )
}
