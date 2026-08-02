import { Menu } from 'lucide-react';
import Hamburgermenu from './-hamburgermenu';
import { useState } from 'react';
import type { NavBarOptions } from '../../-types/-types';
import { useAuth } from '../../-providers/-useAuth';
import { useRouter } from '@tanstack/react-router';

export function NavBar() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
  const { logOut } = useAuth();
  const router = useRouter();

  const links: NavBarOptions[] = [
    { label: 'Discover' },
    { label: 'Favorites' },
    { label: 'Profile' },
    { label: 'Logout', onClick: handleLogout },
  ];

  function handleLogout() {
    logOut();
    router.invalidate();
    console.log('a');
  }

  return (
    <>
      <div className="w-full p-4 justify-items-center hidden md:block relative">
        <ul className="flex flex-row gap-10">
          {links.map((link) => (
            <li
              className="font-montserrat font-semibold text-xl text-white cursor-pointer"
              key={link.label}
              onClick={link.onClick}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex md:hidden justify-end">
        <Menu
          className="text-white cursor-pointer"
          onClick={() => setBurgerMenuOpen(true)}
          size={36}
        />
        {burgerMenuOpen && (
          <Hamburgermenu links={links} setBurgerMenuOpen={setBurgerMenuOpen} />
        )}
      </div>
    </>
  );
}
