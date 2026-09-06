import type { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';

export type Themes = 'Grassroots';

export type Content = {
  id: number;
  title: string;
  link: string;
};

export type ButtonProp = {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
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

export type InputProps = {
  placeholder: string;
  id: string;
  value: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
