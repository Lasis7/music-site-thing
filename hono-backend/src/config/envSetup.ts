import dotenv from 'dotenv';
import path from 'path';
import z from 'zod';

// Check whitch environment is in use (set in scripts)
export const nodeEnv = process.env.NODE_ENV || 'development';

// Get the path to .env based on active environment
const envPath = path.resolve(
  process.cwd(),
  `.env${nodeEnv === 'development' ? '' : '.' + nodeEnv}`,
);

dotenv.config({ path: envPath });

// Zod-schema for env variables
const envSchema = z.object({
  PORT: z.coerce.number().min(1).positive().default(3000),
  DB_PASSWORD: z.string().min(1),
  DB_USER: z.string().min(1),
  DB_NAME: z.string().min(1),
  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().int().positive(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(`Error: ${parsed.error.message}`);
}

export const env = parsed.data;
