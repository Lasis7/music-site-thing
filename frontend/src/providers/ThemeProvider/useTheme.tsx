import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
