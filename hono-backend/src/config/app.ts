import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

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
