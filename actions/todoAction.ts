"use server";

import { ITodo } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.todo.findMany();
};
export const addNewTodo = async (todo: ITodo) => {
  const { title, body, status } = todo;

  await prisma.todo.create({
    data: {
      title,
      body,
      status,
    },
  });

  revalidatePath("/");
};
export const updateTodo = async (todo: ITodo) => {
  const { id, title, body, status } = todo;

  await prisma.todo.update({
    where: {
      id,
    },
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
