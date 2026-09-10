import type { ButtonProp } from '@/types/types';

export default function CButton({
  label,
  type,
  disabled,
  onClick,
}: ButtonProp) {
  return (
    <button
      onClick={onClick}
      type={type ?? 'button'}
      disabled={disabled}
      className="py-2 px-5 text-button-primary-text disabled:text-button-disabled bg-button-primary rounded-md cursor-pointer disabled:cursor-default min-w-20 max-w-50 w-full"
    >
      {label}
    </button>
  );
}
