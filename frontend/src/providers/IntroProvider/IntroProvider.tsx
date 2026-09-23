import { useState, type ReactNode } from 'react';
import { IntroContext } from './IntroContext';

export function IntroProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState<boolean>(
    localStorage.getItem('INTRO_COMPLETED') !== 'true',
  );
  const [step, setStep] = useState<number>(0);

  function openIntro() {
    setVisible(true);
  }

  function closeIntro() {
    const introCompleted = localStorage.getItem('INTRO_COMPLETED');
    if (!introCompleted) {
      localStorage.setItem('INTRO_COMPLETED', 'true');
    }
    setVisible(false);
  }

  function skipIntro(lastStep: number) {
    setStep(lastStep);
  }

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  return (
    <IntroContext.Provider
      value={{
        step,
        nextStep,
        previousStep,
        visible,
        openIntro,
        closeIntro,
        skipIntro,
      }}
    >
      {children}
    </IntroContext.Provider>
  );
}
