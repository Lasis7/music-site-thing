import * as t from 'drizzle-orm/pg-core';
import { ArtistsTable } from './artists.js';
import { SongsTable } from './songs.js';

export const PlaysTable = t.snakeCase.table('plays', {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity({
    startWith: 1,
    increment: 1,
    maxValue: 2147483647,
    minValue: 1,
    cache: 1,
  }),
  songId: t
    .integer()
    .notNull()
    .references(() => SongsTable.id),
  artistId: t
    .integer()
    .notNull()
    .references(() => ArtistsTable.id),
  playAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
});
