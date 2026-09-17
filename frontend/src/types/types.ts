import type {
  Dispatch,
  HTMLInputTypeAttribute,
  ReactNode,
  SetStateAction,
} from 'react';
import type {
  ButtonVariants,
  NavBarItemVariants,
  ErrorIconContainerVariants,
} from '@/styles/tailwindVariants';

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
  icon?: ReactNode;
  iconReplaceLabel?: boolean;
  style?: ButtonVariants;
  onClick?: () => void;
};

export type HamburgerMenuProps = {
  links: NavBarOptions[];
  style?: NavBarItemVariants;
  setBurgerMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export type NavBarOptions = {
  label: string;
  path?: string;
  onClick?: () => void;
};

export type InputProps = {
  placeholder: string;
  id: string;
  value: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  style?: ErrorIconContainerVariants;
  iconConfig?: {
    icon: ReactNode;
    onClick: () => void;
  };
  error?: string;
  onBlur?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
