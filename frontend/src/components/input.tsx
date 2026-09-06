import { type InputProps } from '@/types/types';

export default function CInput({
  placeholder,
  id,
  value,
  label,
  type,
  onChange,
}: InputProps) {
  function returnLabel() {
    return label ? (
      <label htmlFor={id} className="text-text-general items-center xs:mr-auto">
        {label}
      </label>
    ) : undefined;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-150">
      {returnLabel()}
      <input
        className="py-sm xs:pl-sm text-center xs:text-left border-1 border-input-border bg-input-bg rounded-xl w-full max-w-150"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}
