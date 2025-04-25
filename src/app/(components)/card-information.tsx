// components/CardInformation.tsx
"use client";
import React, { useState } from "react";
import { useCardInfo } from "../contexts/card-info-context";

type Props = {
  titleInformation: string
  listInformation?: string[]
  addNewInformationPlaceholder?: string
  noPaddingX?: boolean
}

export default function CardInformation({
  titleInformation,
  addNewInformationPlaceholder,
  noPaddingX = false
}: Props) {

  const { cardData, updateCardData, removeCardItem } = useCardInfo()
  const [newInfo, setNewInfo] = useState("")

  const list = cardData[titleInformation] || []

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      updateCardData(titleInformation, newInfo)
      setNewInfo("")
    }
  };

  function handleAddNewItem(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const itemTrimado = newInfo.trim();
    if (!itemTrimado) return;
    updateCardData(titleInformation, itemTrimado);
    setNewInfo("");

  }

  function handleRemove(index: number) {
    removeCardItem(titleInformation, index)
  }

  return (
    <section className={`my-2 ${noPaddingX ? "" : "px-2"} py-2 bg-white min-h-[170px] h-auto rounded-md`}>
      <header>{titleInformation}</header>
      <ul className="list-disc pl-5 marker:text-cyan-400">
        {list.map((info, index) => (
          <li key={index}>
            <div className="group flex justify-between">
              <span>{info}</span>
              <button
                className="text-gray-700 hover:text-red-800 hidden group-hover:inline cursor-pointer"
                aria-label={`Remover ${info.split(" ")[0]}`}
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
          onKeyDown={handleKeyPress}
          className="w-full px-2 py-2 rounded-l-md border-l border-t border-b border-gray-300 outline-cyan-400"
        />
        <button
          type="button"
          onClick={handleAddNewItem}
          aria-label={`Adicionar ${titleInformation?.split(" ")[0]}`}
          className="px-2 text-xl bg-cyan-400 text-white rounded-r-lg w-[50px] outline-none hover:opacity-80 active:opacity-60"
        >
          +
        </button>
      </form>
    </section>
  );
}
