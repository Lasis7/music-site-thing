import { createContext } from 'react';
import type { Themes } from '@/types/types';

type ThemeContextType = {
  theme: Themes;
  toggleTheme: (theme: Themes) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
