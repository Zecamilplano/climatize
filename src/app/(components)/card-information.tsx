// components/CardInformation.tsx
"use client";
import React, { useState } from "react";
import { useCardInfo } from "../contexts/card-info-context";
import useCardInformation from "../hooks/hook-card-information";

type Props = {
  titleInformation: string
  listInformation: string[]
  onChangeText: (title: string, newList: string[]) => void
  addNewInformationPlaceholder: string
  paddingBottom?: boolean
  borderTop?: boolean,
  borderBottom?: boolean
  error?: string
  cleanError?: () => void
}

export default function CardInformation({
  titleInformation,
  listInformation,
  onChangeText,
  addNewInformationPlaceholder,
  paddingBottom = false,
  error,
  cleanError
}: Props) {

  const [newInfo, setNewInfo] = useState("")

  function addInfo() {
    const itemTrim = newInfo.trim()
    if (!itemTrim) return

    const newList = [...listInformation, itemTrim]
    onChangeText(titleInformation, newList)

    if (newList.length > 0 && cleanError) cleanError()

    setNewInfo("")
    console.log("add info", newList)
  }

  function handleAddByClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    addInfo()
  }

  function handleAddByKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault()
      addInfo()
    }
  }

  function handleRemove(index: number) {
    const newList = listInformation.filter((_, i) => i !== index)
    onChangeText(titleInformation, newList)
  }

  return (
    <section
      className={`px-2 py-2  bg-white min-h-[288px] h-auto border border-gray-300 rounded-md
      ${paddingBottom ? "mb-6" : "pb-0"}
`}>
      <header>{titleInformation}</header>
      <ul className="list-disc pl-5 marker:text-cyan-400">
        {listInformation.map((info, index) => (
          <li key={index}>
            <div className="group flex justify-between">
              <span>{info}</span>
              <button
                className="text-gray-700 hover:text-red-800 hidden group-hover:inline cursor-pointer"
                aria-label={`Remover ${info.split(" ")[0]} `}
                onClick={() => { handleRemove(index) }}
              >
                X
              </button>
            </div>
          </li>
        ))
        }
      </ul>
      <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={addNewInformationPlaceholder}
          value={newInfo}
          onChange={(e) => setNewInfo(e.target.value)}
          onKeyDown={handleAddByKey}
          className="w-full px-2 py-2 rounded-l-md border-l border-t border-b border-gray-300 outline-cyan-400"
        />
        <button
          type="button"
          onClick={handleAddByClick}
          aria-label={`Adicionar ${titleInformation?.split(" ")[0]} `}
          className="px-2 text-xl bg-cyan-400 text-white rounded-r-lg w-[50px] outline-none hover:opacity-80 active:opacity-60"
        >
          +
        </button>
      </form>
      {error && <p className="text-red-500 text-sm pt-2">{error}</p>}
    </section>
  );
}
