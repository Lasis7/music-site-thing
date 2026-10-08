import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { env } from './src/config/envSetup.js';

// Drizzle db config object
export default defineConfig({
  out: './src/db/migrations', // Migration output
  schema: './src/db/schema.ts', // Schema location
  dialect: 'postgresql', // DB type
  strict: true, // Extra safety checks
  verbose: true, // Extra safety checks
  dbCredentials: {
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    user: env.DB_USER,
    host: env.DB_HOST,
    port: env.DB_PORT,
    ssl: false,
  },
});
