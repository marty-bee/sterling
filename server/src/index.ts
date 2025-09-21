import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from './router'; 
import { serve } from '@hono/node-server';

// Create Hono app
const app = new Hono();


app.use(
    '/api/*', // The URL path for your tRPC API
    trpcServer({ router: appRouter })
  );

const isLocal = process.env.NODE_ENV !== 'production';

if (isLocal) {
  serve({
    fetch: app.fetch,
    port: 4000,
  });
  console.log('🚀 Hono server running at http://localhost:4000/api');
}

export default app;

