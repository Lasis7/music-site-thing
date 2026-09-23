import { createContext } from 'react';

export interface IntroContextType {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
  visible: boolean;
  openIntro: () => void;
  closeIntro: () => void;
  skipIntro: (lastStep: number) => void;
}

export const IntroContext = createContext<IntroContextType | null>(null);
