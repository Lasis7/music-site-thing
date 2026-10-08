import * as t from 'drizzle-orm/pg-core';

export const UsersTable = t.snakeCase.table('users', {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity({
    startWith: 1,
    increment: 1,
    maxValue: 2147483647,
    minValue: 1,
    cache: 1,
  }),
  username: t.varchar().notNull().unique(),
  email: t.varchar().notNull().unique(),
  passwordHash: t.varchar().notNull(),
  bio: t.varchar({ length: 10000 }),
  createdAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
});
