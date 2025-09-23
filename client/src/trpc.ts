// client/src/trpc.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../server/src/router';

let baseURL: string;

// Decide URL based on environment
if (import.meta.env.MODE === 'development') {
  // Local dev backend
  baseURL = 'http://localhost:4000/api';
} else {
  // Production (Vercel)
  baseURL = '';
}

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: baseURL,
    }),
  ],
});
