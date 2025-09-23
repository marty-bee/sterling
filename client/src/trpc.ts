// client/src/trpc.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../server/src/router';

const baseUrl: string = import.meta.env.VITE_TRPC_URL;

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: baseUrl,
    }),
  ],
});
