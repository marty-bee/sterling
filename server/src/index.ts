import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from './router';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';

const app = new Hono();

const isLocal = process.env.NODE_ENV !== 'production';
const frontendOrigin = process.env.FRONTEND_URL || 'https://sterling-marty.vercel.app';

// CORS first as hono matches in order
app.use(
  '*',
  cors({
    origin: isLocal ? '*' : frontendOrigin,  
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use('/api/*', trpcServer({ router: appRouter }));

if (isLocal) {
  serve({
    fetch: app.fetch,
    port: 4000,
  });
  console.log('🚀 Hono server running at http://localhost:4000/api');
}

// Production export
export default app;
