import IntroDialog from './IntroDialog.tsx';
import { useIntro } from '@/providers/IntroProvider/useIntro.tsx';

export default function IntroHolder() {
  const { visible } = useIntro();

  return <>{visible && <IntroDialog />}</>;
}
