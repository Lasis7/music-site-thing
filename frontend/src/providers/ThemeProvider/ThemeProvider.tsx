import { useState, useEffect, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Themes } from '@/types/types';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, setMode] = useState<Themes>(() => {
    return (localStorage.getItem('theme') as Themes) || 'Grassroots';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Will be updated when there are new themes
  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
