import { useCallback, useRef } from 'react';
import { useBurgerMenu } from '@/hooks/useBurgerMenu';
import type { HamburgerMenuProps } from '@/types/types';

export default function Hamburgermenu({
  links,
  setBurgerMenuOpen,
}: HamburgerMenuProps) {
  const menuRef = useRef<HTMLElement | null>(null);

  const hamburgerClosingHandler = useCallback(() => {
    setBurgerMenuOpen(false);
  }, [setBurgerMenuOpen]);

  useBurgerMenu(menuRef, hamburgerClosingHandler);

  return (
    <aside
      ref={menuRef}
      className="fixed h-full w-[50%] bg-black/95 right-0 top-0"
    >
      <ul className="flex flex-col gap-10 pt-20 px-10">
        {links.map((link) => (
          <li
            className="font-montserrat font-semibold cursor-pointer text-xl text-text-general duration-300 hover:bg-menu-hover hover:p-4 hover:rounded-lg"
            key={link.label}
            onClick={link.onClick}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
