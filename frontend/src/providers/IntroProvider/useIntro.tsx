import { useContext } from 'react';
import { IntroContext } from './IntroContext';

export function useIntro() {
  const context = useContext(IntroContext);
  if (!context) throw new Error('useIntro must be used within IntroProvider');
  return context;
}
