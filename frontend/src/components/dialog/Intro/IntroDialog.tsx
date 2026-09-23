import CButton from '@/components/button';
import DialogTemplate from '../DialogTemplate';
import { introContent } from '@/const/intro';
import { useIntro } from '@/providers/IntroProvider/useIntro';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { introScrollContainer } from '@/styles/tailwindVariants';

export default function IntroDialog() {
  const { visible, step, closeIntro, skipIntro, nextStep, previousStep } =
    useIntro();

  const title = introContent[step].title;

  function renderIntroContent() {
    return introContent[step].content.map((item) => {
      if (item.type === 'paragraph') {
        return (
          <div key={item.id} className="flex flex-col gap-md mb-xl">
            <p>{item.content}</p>
          </div>
        );
      }

      return (
        <ul key={item.id} className="my-md flex flex-col gap-sm">
          {item.content.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      );
    });
  }

  return (
    <DialogTemplate isOpen={visible} onClose={closeIntro}>
      <div className="flex flex-col p-4 text-center items-center">
        {/* Upper section */}
        <div className="flex relative w-full justify-center">
          <h1 className="text-[clamp(16px,5vw,48px)]">{title}</h1>
          <p className="absolute top-1 right-1 hidden xs:block">{`${step + 1}/${introContent.length}`}</p>
        </div>
        <div className="border-t-1 border-border-color/20 w-full max-w-1/2 lg:max-w-1/3 mb-md" />
        {/* Content */}
        <div
          className={
            step === 1 || step === 3 || step === 4
              ? introScrollContainer({ variant: 'scrollContainer' })
              : introScrollContainer({ variant: 'none' })
          }
        >
          {renderIntroContent()}
        </div>
        {/* Bottom section */}
        <div className="grid grid-cols-1 xs:grid-cols-3 w-full items-center px-4 mt-md">
          <div className="justice-self-center xs:justify-self-start">
            {step > 0 && (
              <ChevronLeft
                className="text-white cursor-pointer"
                size={32}
                onClick={previousStep}
              />
            )}
          </div>
          <div className="justify-self-center">
            {step < introContent.length - 1 && (
              <CButton
                label="Skip"
                style={{ width: 'limited', size: 'sm' }}
                onClick={() => skipIntro(introContent.length - 1)}
              />
            )}
          </div>
          <div className="justice-self-center xs:justify-self-end">
            {step < introContent.length - 1 ? (
              <ChevronRight
                className="text-white cursor-pointer"
                size={32}
                onClick={nextStep}
              />
            ) : (
              <CButton
                label="Close"
                style={{
                  size: 'sm',
                  width: 'limited',
                }}
                onClick={closeIntro}
              />
            )}
          </div>
        </div>
      </div>
    </DialogTemplate>
  );
}
