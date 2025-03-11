"use client"
import { useMenu } from "@/app/contexts/menu-context"
import { useProduct } from "@/app/hooks/hook-products"
import Image from "next/image"
import { useEffect } from "react"
import { MenuResidentialCommercial } from "./menu-category"
import Link from "next/link"
import { listProducts } from "@/app/data/product"
import { motion, AnimatePresence } from "framer-motion"

export function CardProduct() {
  const { products } = useProduct(listProducts)
  const { activeCategory } = useMenu()

  const filteredProducts = products.filter(product => product.sectionArea === activeCategory)

  useEffect(() => {
    console.log("Categoria ativa:", activeCategory)
    console.log("Produtos disponíveis:", products)
  }, [activeCategory, products])
  return (
    <>
      <MenuResidentialCommercial />
      <div className="products-grid flex flex-row flex-wrap justify-center gap-8 gap-y-0 md:pb-1 rounded-md">
        <div className="bg-main pt-14 font-sans flex flex-row gap-9 flex-wrap justify-center ">
          <AnimatePresence key={activeCategory}>

            {filteredProducts.map(product => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, x: -10, y: 0 }}
                animate={{ opacity: 10, x: 0, y: 0 }}
                exit={{ opacity: 1, x: 10, y: 0, transitionEnd: { display: "none" } }}
                transition={{
                  opacity: { duration: 0.3 },
                  x: { type: "spring", stiffness: 300, dampimg: 30 },
                  y: false
                }}
                className="bg-white w-80 flex flex-col flex-wrap text-center justify-center  rounded-md"
              >
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
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div >
    </>
  )
}
