import * as t from 'drizzle-orm/pg-core';
import { SongsTable } from './songs.js';
import { ArtistsTable } from './artists.js';

export const SongArtistTable = t.snakeCase.table(
  'song_artists',
  {
    songId: t
      .integer()
      .notNull()
      .references(() => SongsTable.id, { onDelete: 'cascade' }),
    artistId: t
      .integer()
      .notNull()
      .references(() => ArtistsTable.id, { onDelete: 'cascade' }),
  },
  (table) => [t.primaryKey({ columns: [table.songId, table.artistId] })],
);
