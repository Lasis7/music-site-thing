import { type InputProps } from '@/types/types';
import { CircleAlert } from 'lucide-react';
import { useState } from 'react';
import { ErrorBox } from './ErrorBox';
import { errorIconContainer } from '@/styles/tailwindVariants';

export default function CInput({
  placeholder,
  id,
  value,
  label,
  type,
  iconConfig,
  error,
  style,
  onBlur,
  onChange,
}: InputProps) {
  const [isHoveringOver, setIsHoveringOver] = useState<boolean>(false);

  function renderLabel() {
    return label ? (
      <label htmlFor={id} className="text-text-general items-center xs:mr-auto">
        {label}
      </label>
    ) : undefined;
  }

  function renderIcon() {
    return iconConfig ? (
      <div
        className="hidden xs:block absolute top-[45%] right-2"
        onClick={iconConfig.onClick}
      >
        {iconConfig.icon}
      </div>
    ) : undefined;
  }

  function renderErrorIcon() {
    return !error ? undefined : (
      <div
        className={errorIconContainer({
          variant: style?.variant,
        })}
      >
        <CircleAlert
          size={28}
          className="text-general-red"
          onMouseOver={() => setIsHoveringOver(true)}
          onMouseOut={() => setIsHoveringOver(false)}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-150 relative">
      {renderLabel()}
      <input
        className="py-sm xs:pl-sm text-center xs:text-left border-1 border-input-border bg-input-bg rounded-xl w-full max-w-150"
        id={id}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
      />
      {renderIcon()}
      {renderErrorIcon()}
      {isHoveringOver && <ErrorBox inputError={error!} />}
    </div>
  );
}
