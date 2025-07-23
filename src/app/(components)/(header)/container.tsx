import React from "react";

type ContainerType = {
  children: React.ReactNode
  fixed?: boolean
}

export default function ContainerHeader({ children, fixed = false }: ContainerType) {
  return (
    <div
      className={`
        bg-white w-full px-3 py-3 flex justify-between 
        ${fixed ? "fixed top-0 left-0 right-0 z-50" : ""}
    `}>
      {children}
    </div>
  )
}
