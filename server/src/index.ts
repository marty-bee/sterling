import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from './router'; // Your tRPC router


// Create Hono app
const app = new Hono();

// Forward /trpc/* routes to tRPC using hono-trpc adapter
    app.use(
      '/trpc/*', // The URL path for your tRPC API
      trpcServer({ router: appRouter })
    );

// Start server
// serve({
//   fetch: app.fetch,
//   port: 4000,
// });

export default app;

console.log('🚀 Hono server running at http://localhost:4000/trpc');
