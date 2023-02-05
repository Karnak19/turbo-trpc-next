import { publicProcedure, router } from "./trpc";
import { userRouter } from "./user";

export const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
