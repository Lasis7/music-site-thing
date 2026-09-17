import { useState, useEffect, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Themes } from '@/types/types';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setMode] = useState<Themes>(() => {
    return (localStorage.getItem('theme') as Themes) || 'Grassroots';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Will be used when there are new themes
  const toggleTheme = (theme: Themes) => {
    setMode(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
