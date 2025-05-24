import { useEffect, useState } from "react";
import API from "./api";
import { ProductPortugueseType } from "../types/types";

export function useGetProducts() {
  const [getProducts, setGetProducts] = useState<ProductPortugueseType[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchProducts() {

    try {
      const response = await fetch(`${API}/allProdutos`)
      const data = await response.json()
      // console.log(data)
      setGetProducts(data.produtos)
    } catch (err) {
      console.error("Erro ao buscar produtos", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    fetchProducts()
  }, [])

  return { getProducts, setGetProducts, loading, refetch: fetchProducts }
}
