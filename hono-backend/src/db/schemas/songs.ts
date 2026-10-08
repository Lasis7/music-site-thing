import * as t from 'drizzle-orm/pg-core';

export const SongsTable = t.snakeCase.table('songs', {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity({
    startWith: 1,
    increment: 1,
    maxValue: 2147483647,
    minValue: 1,
    cache: 1,
  }),
  title: t.varchar().notNull(),
  url: t.varchar().notNull().unique(),
});
