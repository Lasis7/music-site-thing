import type { Content } from '../../-types/-types';

export default function GridItem({ link }: { link: Content }) {
  return (
    <iframe
      className="w-full h-100 border border-white min-w-25 max-w-175 max-h-90"
      src={link.link}
      title={link.title}
      referrerPolicy="strict-origin-when-cross-origin"
      sandbox="allow-scripts allow-downloads allow-forms allow-popups allow-same-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
