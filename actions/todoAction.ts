"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.todo.findMany();
};

export const addNewTodo = async ({ title, body, status }: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      status,
    },
  });
  revalidatePath("/");
};

export const deleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};
