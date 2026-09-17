import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'rounded-md cursor-pointer disabled:cursor-default w-full group',
  variants: {
    variant: {
      primary:
        'text-button-primary-text disabled:text-button-disabled bg-button-primary',
    },
    size: {
      sm: 'py-sm px-sm',
      md: 'py-md px-md',
    },
    width: {
      limited: 'max-w-50',
    },
    minWidth: {
      default: 'min-w-20',
      none: 'min-w-0',
      small: 'min-w-10',
    },
    iconPositioning: {
      start: 'flex items-center justify-center sm:justify-start',
      center: 'flex items-center justify-center',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    minWidth: 'default',
  },
});

export type ButtonVariants = VariantProps<typeof button>;

export const navBarItem = tv({
  base: 'font-montserrat font-semibold text-xl text-text-general cursor-pointer',
  variants: {
    menu: {
      navbar: 'duration-500 hover:bg-menu-hover hover:p-2 hover:rounded-lg',

      burger: 'duration-300 hover:bg-menu-hover hover:p-4 hover:rounded-lg',
    },
    variant: {
      active: 'underline hover:no-underline',
    },
  },
});

export type NavBarItemVariants = VariantProps<typeof navBarItem>;

export const errorIconContainer = tv({
  base: 'hidden xs:block absolute top-[45%]',
  variants: {
    variant: {
      normal: 'right-2',
      extraIcon: 'right-15',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});

export type ErrorIconContainerVariants = VariantProps<
  typeof errorIconContainer
>;
