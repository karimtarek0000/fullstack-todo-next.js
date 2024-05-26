import { TStatus } from "@/schema";

export interface ITodo {
  id?: string;
  title?: string;
  body?: string | undefined;
  status?: TStatus;
}
