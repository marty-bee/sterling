import {
  createTRPCClient,
  httpBatchStreamLink,
} from '@trpc/client';

import type { AppRouter } from '../../server/src/router';

const baseUrl = import.meta.env.VITE_TRPC_URL;

// init trpc client
export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchStreamLink({
      url: `${baseUrl}/api`,
    }),
  ],
});
