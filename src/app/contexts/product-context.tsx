import React, { createContext, useState } from "react"
import { ProductPortugueseType, TypeProduct } from "../types/types"
import API from "../database/api"

type ProductContextType = {
  products: ProductPortugueseType[]
  updateList: () => Promise<void>
  addProduct: (product: ProductPortugueseType) => void
}

const ProductContext = createContext<ProductContextType | null>(null)

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [product, setProducts] = useState<TypeProduct>()

  const formData = new FormData()

  formData.append("nome", product?.nameProduct || "")
  formData.append('descricao', product?.description || "")
  formData.append('caracteristicas', `${product?.mainFeatures}`)
  formData.append('beneficios', `${product?.benefits}`)
  formData.append('especificacoes', `${product?.technicalSpecifications}`)

  const updateProduct = async () => {
    const res = await fetch(`${API}/produto`, {
      method: "PUT",
      body: formData
    })
  }
}
