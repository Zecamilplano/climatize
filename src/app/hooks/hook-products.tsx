"use client"
import { useState } from "react";
import { TypeProduct } from "../types/types";
import { listProducts } from "../data/product";

export function useProduct() {
  const [products, setProducts] = useState<TypeProduct[]>(listProducts)

  return { products, setProducts }
}
