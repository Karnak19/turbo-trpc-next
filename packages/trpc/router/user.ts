import { z } from "zod";
import { publicProcedure, router } from "./trpc";

const users = [{ id: "1", name: "toto" }];

export const userRouter = router({
  getOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ input: { id } }) => {
      return users.find((user) => user.id === id);
    }),

  getAll: publicProcedure.query(() => users),
});
