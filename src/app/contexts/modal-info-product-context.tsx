"use client"
import { createContext, ReactNode, useContext, useState } from "react"
import { ProductPortugueseType } from "../types/types"

type ModalContextType = {
  selectedProduct: ProductPortugueseType | null
  setSelectedProduct: (product: ProductPortugueseType | null) => void
  editProduct: boolean
  setEditProduct: (edit: boolean) => void
  openModalIndex: number | null
  setOpenModalIndex: (index: number | null) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductPortugueseType | null>(null);
  const [editProduct, setEditProduct] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  return (
    <ModalContext.Provider
      value={{ selectedProduct, setSelectedProduct, editProduct, setEditProduct, openModalIndex, setOpenModalIndex }}
    >
      {children}
    </ModalContext.Provider>
  );
}

// Hook para usar o contexto
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro do ModalProvider");
  }
  return context;
}
