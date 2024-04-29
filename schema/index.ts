import { z } from "zod";
export type TStatus = "todo" | "progress" | "complete";
export const status = ["todo", "progress", "complete"];
export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(20, {
      message: "Title must not be longer than 20 characters.",
    }),
  body: z
    .string()
    .max(100, {
      message: "Body must not be longer than 100 characters",
    })
    .optional(),
  status: z.enum(["todo", "progress", "complete"]),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;
