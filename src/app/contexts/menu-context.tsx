"use client"
import React, { createContext, useContext, useState } from "react"

interface MenuContextType {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [activeCategory, setActiveCategory] = useState<string>("residencial")

  return (
    <MenuContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu deve ser usado dentro de um MenuProvider");
  }
  return context;
}
