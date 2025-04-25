"use client"

import { CardInfoProvider } from "@/app/contexts/card-info-context"
import NewProduct from "./new-product"

export default function PageNovoProduto() {
  return (
    <CardInfoProvider>
      <NewProduct />
    </CardInfoProvider>
  )
}

