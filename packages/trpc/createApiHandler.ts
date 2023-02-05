import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "./router";

export const createApiHandler = (apiKey: string) =>
  createNextApiHandler({
    router: appRouter,
    createContext: () => ({
      apiKey,
    }),
  });
