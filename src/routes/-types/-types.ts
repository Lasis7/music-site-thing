import type { Dispatch, SetStateAction } from 'react';

export type Content = {
  id: number;
  title: string;
  link: string;
};

export type ButtonProp = {
  label: string;
  onClick?: () => void;
};

export type HamburgerMenuProps = {
  links: NavBarOptions[];
  setBurgerMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export type NavBarOptions = {
  label: string;
  onClick?: () => void;
};
