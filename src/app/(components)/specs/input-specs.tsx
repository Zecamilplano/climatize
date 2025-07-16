import { useRef } from "react";

interface InputEspecificacaoProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  isEditing: boolean
  format?: "kilowatt" | "metroQuadrado" | "litros"
}

export default function InputSpec({
  label,
  name,
  value,
  placeholder,
  onChange,
  isEditing,
  format
}: InputEspecificacaoProps) {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (value: string) => {
    let newValue = value
    let cursorPosition = 0

    switch (format) {
      case "metroQuadrado":
        newValue = newValue.replace(/\s?m²$/, "");
        newValue = newValue.replace(/[^\d,]/g, "");
        if (newValue.trim()) {
          newValue += " m²";
          cursorPosition = newValue.length - 3
        }
        break;

      case "kilowatt":
        newValue = newValue.replace(/\s?KW$/i, "");
        newValue = newValue.replace(/[^\d,]/g, "");
        if (newValue.trim()) {
          newValue += " KW"
          cursorPosition = newValue.length - 3
        }
        break;

      case "litros":
        newValue = newValue.replace(/\s?L$/i, "");
        newValue = newValue.replace(/[^\d,]/g, "");
        if (newValue.trim()) {
          newValue += " L"
          cursorPosition = newValue.length - 2
        }
        break;

      default:
        break;
    }

    setTimeout(() => {
      if (inputRef.current && cursorPosition > 0) {
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, 0);


    onChange(newValue)
  }

  return (
    <div className="flex flex-col text-base py-3">
      <label htmlFor={name}>{label}</label>
      {isEditing ? (
        <>
          <input
            id={name}
            ref={inputRef}
            type="text"
            name={name}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
            className="border border-gray-300 py-2 rounded-md"
          />
        </>
      ) : (
        <span className="text-gray-700">{value || "-"}</span>
      )}
    </div>
  );
}
