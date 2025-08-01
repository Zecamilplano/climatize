import React from "react";

type ContainerType = {
  children: React.ReactNode
  fixed?: boolean
}

export default function ContainerHeader({ children, fixed = false }: ContainerType) {
  return (
    <div
      className={`
         w-full bg-white px-3 py-3 block
        ${fixed ? "lg:fixed top-0 left-0 right-0 z-50" : "block z-50"}
    `}>
      <div className="relative flex flex-row  items-center justify-between  h-full ">{children}</div>
    </div>
  )
}
