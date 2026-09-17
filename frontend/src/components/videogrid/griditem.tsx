import type { Content } from '@/types/types';
import { Heart, InfoIcon } from 'lucide-react';
import CButton from '../button';

export default function GridItem({ link }: { link: Content }) {
  return (
    <div className="flex flex-col border border-border-color rounded-b-lg w-full">
      <iframe
        className="w-full h-100 max-w-175 max-h-90"
        src={link.link}
        title={link.title}
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-downloads allow-forms allow-popups allow-same-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col p-1 sm:p-4 gap-md justify-around w-full">
        <CButton
          label="Like"
          icon={
            <Heart
              size={28}
              className="text-button-primary-text group-hover:text-red-500"
            />
          }
          style={{
            iconPositioning: 'start',
            size: 'md',
            minWidth: 'none',
          }}
        />
        <CButton
          label="Info"
          icon={
            <InfoIcon
              size={28}
              className="text-button-primary-text group-hover:text-gray-500"
            />
          }
          style={{
            iconPositioning: 'start',
            size: 'md',
            minWidth: 'none',
          }}
        />
      </div>
    </div>
  );
}
