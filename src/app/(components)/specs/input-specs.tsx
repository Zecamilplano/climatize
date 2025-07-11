interface InputEspecificacaoProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  isEditing: boolean
}

export default function InputSpec({
  label,
  name,
  value,
  placeholder,
  onChange,
  isEditing,
}: InputEspecificacaoProps) {
  return (
    <div className="flex flex-col text-base py-3">
      <label htmlFor={name}>{label}</label>
      {isEditing ? (
        <input
          id={name}
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="border border-gray-300 py-2 rounded-md"
        />
      ) : (
        <span className="text-gray-700">{value || "-"}</span>
      )}
    </div>
  );
}
