import * as t from 'drizzle-orm/pg-core';
import { SongsTable } from './songs.js';
import { UsersTable } from './users.js';

export const FavoritesTable = t.snakeCase.table(
  'favorites',
  {
    songId: t
      .integer()
      .notNull()
      .references(() => SongsTable.id, { onDelete: 'cascade' }),
    userId: t
      .integer()
      .notNull()
      .references(() => UsersTable.id, { onDelete: 'cascade' }),
  },
  (table) => [t.primaryKey({ columns: [table.songId, table.userId] })],
);
