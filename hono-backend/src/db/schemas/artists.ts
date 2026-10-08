import * as t from 'drizzle-orm/pg-core';

export const ArtistsTable = t.snakeCase.table('artists', {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity({
    startWith: 1,
    increment: 1,
    maxValue: 2147483647,
    minValue: 1,
    cache: 1,
  }),
  artist: t.varchar().notNull(),
  discogs_id: t.integer().notNull().unique(),
  description: t.varchar(),
});
