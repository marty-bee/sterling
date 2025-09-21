import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({

  ping: t.procedure.query(() => {
    return 'pong';
  }),
  pong: t.procedure.query(() => {
    return 'ping';
  }),
  greeting: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { text: `Hello, ${input.name} from Hono + tRPC!` };
    }),
});

export type AppRouter = typeof appRouter;
