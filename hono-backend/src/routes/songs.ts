import { Hono } from 'hono';
import type { Content } from '../types/types.js';

export const songs = new Hono();

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

songs.get('/', (c) => {
  return c.json(links);
});

songs.get('/:id', (c) => {
  const id = c.req.param('id');
  const song = links.find((song) => song.id === Number(id));
  if (!song) return c.json({ error: 'Song not found' }, 404);
  return c.json(song);
});
