"use client"
import { useState } from "react";
import { TypeProduct } from "../types/types";

export function useProduct(initialProucts: TypeProduct[]) {
  const [products, setProducts] = useState<TypeProduct[]>(initialProucts)

  return { products, setProducts }
}
