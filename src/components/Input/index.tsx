interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const Input = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  error,
}: InputProps) => {
  console.log(error);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-base font-medium text-dark-blue">{label}</label>
      <input
        className="rounded-lg border-2 border-light-gray p-3 active:border-purplish-blue focus:border-purplish-blue focus-visible:border-purplish-blue outline-purplish-blue"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error !== "" && (
        <span className="text-strawberry-red text-sm text-right">{error}</span>
      )}
    </div>
  );
};
