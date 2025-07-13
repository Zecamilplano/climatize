import { useEffect, useState } from "react";
import { categoryType, ProductPortugueseType } from "../types/types";
import API from "../database/api";
import { capitalize } from "../ultils/strings";

export function useCategoryProducts(activeCategory: string) {
  const [product, setProduct] = useState<ProductPortugueseType[]>([])

  useEffect(() => {
    async function getProductsCategory() {

      const response = await fetch(`${API}/allCategorias`)
      const data = await response.json()
      const productsCategory = data.categorias

      const filterCategory = productsCategory.find((category: categoryType) => category.nome === capitalize(activeCategory))
      setProduct(filterCategory?.produtos || [])
    }
    getProductsCategory()
  }, [activeCategory])

  return product
}
