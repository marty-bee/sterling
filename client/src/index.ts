import {
  createTRPCClient,
  httpBatchStreamLink,
} from '@trpc/client';

import type { AppRouter } from '../../server/src/router';

// init trpc client
export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchStreamLink({
      url: 'http://localhost:4000/api',
    }),
  ],
});
