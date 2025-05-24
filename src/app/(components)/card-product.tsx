import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react"

type TypeProduct = {
  nome: string
  urlImage: string | number
  width?: number
  height?: number
  href: string
}


export function CardProduct({
  nome,
  urlImage,
  width,
  height,
  href }: TypeProduct) {
  return (
    <>
      {/* {CustomComponent && <CustomComponent />} */}
      <div className="products-grid flex flex-row flex-wrap justify-center gap-8 gap-y-0 md:pb-1 rounded-md">
        <div className="bg-main pt-14 font-sans flex flex-row  gap-9 flex-wrap justify-center ">
          <AnimatePresence >

            <motion.article
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
              <img
                src={`${urlImage}`}
                alt={`produto ${nome}`}
                width={176}
                height={176}
                className="w-44 flex self-center" />

              <h2 className="text-xl font-medium text-card-product">{nome}</h2>
              <Link
                href={`${href}`}
                className="bg-button mx-3 rounded text-white text-xl py-2 hover:opacity-70 active:opacity-50 mb-3 outline-none">Comprar</Link>
            </motion.article>
          </AnimatePresence>
        </div>
      </div >
    </>
  )
}
