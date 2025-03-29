"use client"
import { TypeCardInformation } from "../types/types"
import HooksCardInformation from "../hooks/hook-card-information"


export default function CardInformation({ titleInformation, addNewInformationPlaceholder, noPaddingX = false }: TypeCardInformation) {
  const { listInformation, addItem, handleKeyPress, newInfo, removeItem, setNewInfo } = HooksCardInformation(titleInformation)

  return (
    <section className={`my-2 ${noPaddingX ? "" : "px-2 "} py-2 bg-white  min-h-[170px] h-auto rounded-md`}>

      <header>{titleInformation}</header>
      <ul className="list-disc pl-5 marker:text-cyan-400">
        {listInformation.length > 0 ? (
          listInformation.map((info, index) => (
            <li key={index}>
              <div className="group flex justify-between">
                <span>{info}</span>
                <button
                  className="text-gray-700 hover:text-red-800 hidden group-hover:inline cursor-pointer"
                  aria-label={`Remover ${info.split(" ")[0]}`}
                  onClick={(e) => (e.preventDefault(), removeItem(index))}
                >
                  X
                </button>
              </div>
            </li>
          ))
        ) : (
          <p></p>
        )}

      </ul>

      <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={addNewInformationPlaceholder}
          value={newInfo}
          onChange={(e) => setNewInfo(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-2 py-2 rounded-l-md border-l border-t border-b border-gray-300 outline-cyan-400  "
        />
        <button
          type="button"
          aria-label={`Adicionar ${titleInformation.split(" ")[0]}`}
          onClick={addItem}
          className="px-2 text-xl bg-cyan-400 text-white rounded-r-lg w-[50px] outline-none hover:opacity-80 active:opacity-60"
        >
          +
        </button>
      </form>

    </section>
  )
}
