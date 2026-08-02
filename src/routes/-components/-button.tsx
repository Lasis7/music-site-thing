import type { ButtonProp } from '../-types/-types';

export default function CButton({ label, onClick }: ButtonProp) {
  return (
    <div className="flex justify-center xl:justify-end">
      <button
        onClick={onClick}
        className="py-2 px-5 text-black bg-buttonPrimary rounded-md cursor-pointer"
      >
        {label}
      </button>
    </div>
  );
}
