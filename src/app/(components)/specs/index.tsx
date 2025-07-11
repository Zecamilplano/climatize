import { useEffect, useState } from "react"
import InputSpec from "./input-specs"

interface EspecificacoesTecnicasProps {
  isEditing: boolean
  dadosAnteriores?: string[]
  onChangeAll?: (valores: string[]) => void
  error?: string
  clearError?: () => void
}

export default function EspecificacoesTecnicas({
  isEditing,
  dadosAnteriores = [],
  onChangeAll,
  error,
  clearError
}: EspecificacoesTecnicasProps) {
  const labels = [
    "Consumo elétrico (KW)",
    "Área atendida",
    "Capacidade do tanque"
  ]
  const fieldNames = [
    "consumoEletrico",
    "areaAtendida",
    "capacidadeTanque"
  ]

  const [valores, setValores] = useState<string[]>(["", "", ""])

  // Atualiza o estado interno com novos dados externos, se diferentes
  useEffect(() => {
    if (dadosAnteriores.length === valores.length) {
      const mudou = dadosAnteriores.some((v, i) => v !== valores[i])
      if (mudou) {
        setValores(dadosAnteriores)
      }
    }
  }, [dadosAnteriores])

  // Envia os valores pro pai
  useEffect(() => {
    if (typeof onChangeAll === "function") {
      onChangeAll(valores)
    }
  }, [valores])

  const handleChange = (index: number, newValue: string) => {
    const updated = [...valores]
    updated[index] = newValue

    if (clearError && newValue.trim() !== "") clearError()

    setValores(updated)
  }

  return (
    <div className="bg-white w-[312px]">
      <div className="bg-white border border-gray-300 px-3 w-[303px] rounded-md">
        <h3 className="text-lg font-medium">Especificações Técnicas</h3>

        {labels.map((label, index) => (
          <InputSpec
            key={index}
            label={label}
            name={fieldNames[index]}
            value={valores[index]}
            onChange={(v: string) => handleChange(index, v)}
            placeholder={`Digite ${label.toLowerCase()}`}
            isEditing={isEditing}
          />
        ))}
        {error && <p className="text-red-500 text-sm pb-2">{error}</p>}
      </div>
    </div>
  )
}
