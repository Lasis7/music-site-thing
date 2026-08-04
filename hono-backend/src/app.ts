import dotenv from 'dotenv';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import path from 'path';

const env = process.env.NODE_ENV || 'development';

const envPath = path.resolve(
  process.cwd(),
  `.env${env === 'development' ? '' : '.' + env}`,
);
dotenv.config({ path: envPath });

console.log('NODE_ENV:', process.env.NODE_ENV);

export const app = new Hono();

app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:5173/',
    allowMethods: ['POST', 'GET', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(prettyJSON());

app.use(logger());
