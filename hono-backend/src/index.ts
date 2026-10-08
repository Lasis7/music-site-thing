import { serve } from '@hono/node-server';
import { app } from './app.js';
import { env, nodeEnv } from './config/envSetup.js';

console.log(`Environment: ${nodeEnv}`);

const server = serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);

// Graceful shutdown according to docs
function shutDown() {
  console.log('Shutting down the server');
  server.close((err) => {
    if (err) {
      console.log('Error occured:', err.message);
      process.exit(1);
    }
    process.exit(0);
  });
}

process.on('SIGINT', shutDown);
process.on('SIGTERM', shutDown);
