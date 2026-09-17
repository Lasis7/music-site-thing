import { useCallback, useRef } from 'react';
import { useBurgerMenu } from '@/hooks/useBurgerMenu';
import type { HamburgerMenuProps } from '@/types/types';
import { useLocation } from '@tanstack/react-router';
import { navBarItem } from '@/styles/tailwindVariants';

export default function Hamburgermenu({
  links,
  style,
  setBurgerMenuOpen,
}: HamburgerMenuProps) {
  const location = useLocation();

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
            className={navBarItem({
              menu: style?.menu,
              variant: location.href === link.path ? 'active' : undefined,
            })}
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
