import type { DialogProps } from '@/types/types';
import { useLayoutEffect, useRef } from 'react';

export default function DialogTemplate({
  isOpen,
  onClose,
  children,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="flex flex-col bg-dialog max-w-1/2 w-full border-2 border-border-color text-text-general fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      {children}
    </dialog>
  );
}
