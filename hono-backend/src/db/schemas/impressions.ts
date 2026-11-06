import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.js';
import { SongsTable } from './songs.js';

export const ImpressionsTable = t.snakeCase.table(
  'impressions',
  {
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
      .references(() => SongsTable.id, { onDelete: 'restrict' }),
    userId: t
      .integer()
      .references(() => UsersTable.id, { onDelete: 'set null' }),
    shownAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    t
      .index('song_impression_idx')
      .on(table.userId, table.songId, table.shownAt),
  ],
);
