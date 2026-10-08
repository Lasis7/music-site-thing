import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { songs } from './routes/songs.js';

export const app = new Hono();

// app.ts handles route and middleware registers

app.use('*', logger());

app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:5173/',
    allowMethods: ['POST', 'GET', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use('*', prettyJSON());

app.route('/api/songs', songs);
