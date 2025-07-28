import React from "react";

type ContainerType = {
  children: React.ReactNode
  fixed?: boolean
}

export default function ContainerHeader({ children, fixed = false }: ContainerType) {
  return (
    <div
      className={`
         w-full 
        ${fixed ? "fixed top-0 left-0 right-0 z-50" : ""}
    `}>
      <div className="relative flex flex-row justify-between">{children}</div>
    </div>
  )
}
