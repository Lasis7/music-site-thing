import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '../config/envSetup.js';

export const db = drizzle({
  connection: {
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    user: env.DB_USER,
    port: env.DB_PORT,
    database: env.DB_NAME,
  },
});
