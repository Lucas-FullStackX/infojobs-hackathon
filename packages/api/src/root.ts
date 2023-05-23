import { accountRouter } from './router/account';
import { authRouter } from './router/auth';
import { infoJobsRouter } from './router/infoJobs';
import { postRouter } from './router/post';
import { testRouter } from './router/test';
import { userRouter } from './router/user';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  account: accountRouter,
  auth: authRouter,
  user: userRouter,
  post: postRouter,
  test: testRouter,
  infoJobs: infoJobsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
