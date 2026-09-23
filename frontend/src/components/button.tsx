import type { ButtonProp } from '@/types/types';
import { button } from '@/styles/tailwindVariants';

export default function CButton({
  label,
  type,
  disabled,
  icon,
  iconReplaceLabel,
  style,
  onClick,
}: ButtonProp) {
  function renderButtonContent() {
    if (icon && iconReplaceLabel) {
      return (
        <>
          <span className="hidden sm:block">{label}</span>
          <span className="sm:hidden">{icon}</span>
        </>
      );
    } else if (icon) {
      return (
        <>
          <span className="sm:mr-md">{icon}</span>
          <span className="hidden sm:block">{label}</span>
        </>
      );
    } else {
      return <span>{label}</span>;
    }
  }

  return (
    <button
      onClick={onClick}
      type={type ?? 'button'}
      disabled={disabled}
      className={button({
        variant: style?.variant,
        size: style?.size,
        iconPositioning: style?.iconPositioning,
        width: style?.width,
        minWidth: style?.minWidth,
      })}
    >
      {renderButtonContent()}
    </button>
  );
}
