import type { Content } from '@/types/types';
import GridItem from './griditem';
import CButton from '../button';

export default function VideoGrid() {
  const links: Content[] = [
    {
      id: 1,
      title: 'Mad One - Dimension',
      link: 'https://www.youtube.com/embed/emQMZ2tjWZg',
    },
    {
      id: 2,
      title: 'McGruff - Harlem Kidz Get Biz',
      link: 'https://www.youtube.com/embed/-MMQlgj5KKg',
    },
    {
      id: 3,
      title: 'Maja League',
      link: 'https://www.youtube.com/embed/7PUWXoZ5ySw',
    },
  ];
  return (
    <>
      <CButton label="Refresh" />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 py-4 justify-items-center">
        {links.map((link) => (
          <GridItem key={link.id} link={link} />
        ))}
      </div>
    </>
  );
}
