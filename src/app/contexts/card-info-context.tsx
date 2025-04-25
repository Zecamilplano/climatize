"use client"

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react"

type CardData = {
  [key: string]: string[]
}

type CardInfoContextType = {
  cardData: CardData
  setCardData: React.Dispatch<React.SetStateAction<CardData>>
  updateCardData: (title: string, newItem: string) => void
  removeCardItem: (title: string, index: number) => void
}

const CardInfoContext = createContext<CardInfoContextType | undefined>(undefined)

const STORAGE_KEYS = [
  "Características Principais",
  "Benefícios",
  "Especificações"
] as const

export function CardInfoProvider({ children }: { children: ReactNode }) {
  const [cardData, setCardData] = useState<CardData>({
    "Características Principais": [],
    "Benefícios": [],
    "Especificações": []
  })

  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const storedData: CardData = {}
    STORAGE_KEYS.forEach((key) => {
      const data = localStorage.getItem(`card_${key}`)
      storedData[key] = data ? JSON.parse(data) : []
    })
    setCardData(storedData)
  }, [])

  // Salvar dados no localStorage sempre que cardData mudar
  useEffect(() => {
    STORAGE_KEYS.forEach((key) => {
      localStorage.setItem(`card_${key}`, JSON.stringify(cardData[key] || []))
    })
  }, [cardData])

  function updateCardData(title: string, newItem: string) {
    if (!newItem || newItem.trim() === "") {
      console.warn("Tentativa de adicionar item vazio")
      return
    }

    setCardData(prev => ({
      ...prev,
      [title]: [...(prev[title] || []), newItem]
    }))
  }

  function removeCardItem(title: string, index: number) {
    setCardData(prev => ({
      ...prev,
      [title]: prev[title].filter((_, i) => i !== index)
    }))
  }

  return (
    <CardInfoContext.Provider value={{ cardData, setCardData, updateCardData, removeCardItem }}>
      {children}
    </CardInfoContext.Provider>
  )
}

export function useCardInfo() {
  const context = useContext(CardInfoContext)
  if (!context) {
    throw new Error("useCardInfo deve ser usado dentro do CardInfoProvider")
  }
  return context
}

