import { redirect } from "next/navigation"
import { useState, useEffect } from "react"

export default function HooksCardInformation(storageKey?: string) {
  const LOCAL_STORAGE_KEY = `card_${storageKey}`

  const [listInformation, setListInformation] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const storedList = localStorage.getItem(LOCAL_STORAGE_KEY)
      return storedList ? JSON.parse(storedList) : []
    }
    return []
  })

  const [newInfo, setNewInfo] = useState<string>("")

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listInformation))
  }, [listInformation])

  function addItem() {
    if (newInfo.trim() === "") return

    setListInformation([...listInformation, newInfo])
    setNewInfo("")
  }

  function removeItem(indexToRemove: number) {
    setListInformation(listInformation.filter((_, index) => index !== indexToRemove))
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {

    if (e.key === "Enter") {
      e.preventDefault()
      addItem()
    }
  }

  function clearField() {
    redirect("/")
  }

  function clearAllStorage() {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith("card_")) {
        localStorage.removeItem(LOCAL_STORAGE_KEY)
        setListInformation([])

      }
    })
  }


  return {
    listInformation,
    setListInformation,
    newInfo,
    setNewInfo,
    addItem,
    removeItem,
    handleKeyPress,
    clearField,
    clearAllStorage,
  }
}
