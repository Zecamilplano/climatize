import { redirect } from "next/navigation"
import { useState, useEffect } from "react"

type CardDataType = {
  [key: string]: string[]
}

export default function useCardInformation() {
  const [cardData, setCardData] = useState<CardDataType>({
    "Características Principais": [],
    "Benefícios": [],
    "Especificações": []
  })

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
      [title]: prev[title].filter(((_, i) => i !== index))
    }))
  }

  return { cardData, updateCardData, removeCardItem }
}
