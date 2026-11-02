import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.js';
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
    .references(() => SongsTable.id, { onDelete: 'restrict' }),
  userId: t
    .integer()
    .notNull()
    .references(() => UsersTable.id, { onDelete: 'set null' }),
  playAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
});
