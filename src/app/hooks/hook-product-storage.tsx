import { useState, useEffect } from "react";
import { imagesType, saveProductType } from "../types/types";

export default function useProductStorage() {
  const LOCAL_STORAGE_KEY = "produto"

  const [product, setProduct] = useState<saveProductType>(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : { nome: "", descricao: "" };
    }
    return { nome: "", descricao: "" }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(product))
  }, [product])

  function updateProduct(field: string, value: string) {
    setProduct(prev => ({ ...prev, [field]: value }))
  }

  function cleanProduct() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setProduct({ nome: "", descricao: "" });
  }

  return { product, updateProduct, cleanProduct }
}
