// client/src/trpc.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../server/src/router';

// Use different URLs for dev and prod
const baseUrl =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:4000'
    : '';

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${baseUrl}/api`,
    }),
  ],
});
