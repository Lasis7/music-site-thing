import { Menu } from 'lucide-react';
import Hamburgermenu from './hamburgermenu';
import { useState } from 'react';
import type { NavBarOptions } from '@/types/types';
import { useAuth } from '@/providers/AuthProvider/useAuth';
import { useLocation } from '@tanstack/react-router';
import { navBarItem, type NavBarItemVariants } from '@/styles/tailwindVariants';

export function NavBar({ style }: { style: NavBarItemVariants }) {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
  const { logOut, user } = useAuth();
  const location = useLocation();

  const links: NavBarOptions[] = [
    { label: 'Discover', path: '/discover' },
    { label: 'Favorites', path: '/favorites' },
    { label: 'Profile', path: '/profile' },
    { label: 'Logout', onClick: handleLogout },
  ];

  function handleLogout() {
    logOut();
  }

  return (
    <>
      <div className="w-full p-4 justify-items-center hidden md:block relative">
        <div className="text-text-general">logged in as {user}</div>
        <ul className="flex flex-row gap-10">
          {links.map((link) => (
            <li
              className={navBarItem({
                menu: style.menu,
                variant: location.href === link.path ? 'active' : undefined,
              })}
              key={link.label}
              onClick={link.onClick}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex md:hidden justify-center xs:justify-end">
        <Menu
          className="text-white cursor-pointer"
          onClick={() => setBurgerMenuOpen(true)}
          size={36}
        />
        {burgerMenuOpen && (
          <Hamburgermenu
            links={links}
            style={{ menu: 'burger' }}
            setBurgerMenuOpen={setBurgerMenuOpen}
          />
        )}
      </div>
    </>
  );
}
