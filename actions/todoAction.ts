"use server";

import { ITodo } from "@/interface";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllUserTodos = async () => {
  return await prisma.todo.findMany({
    where: {
      user_id: auth().userId,
    },
  });
};
export const addNewTodo = async (todo: ITodo) => {
  const { title, body, status } = todo;

  await prisma.todo.create({
    data: {
      title,
      body,
      status,
      user_id: auth().userId,
    },
  });

  revalidatePath("/");
};
export const updateTodo = async (todo: ITodo) => {
  const { id, title, body, status } = todo;

  await prisma.todo.update({
    where: {
      id,
      user_id: auth().userId,
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
      user_id: auth().userId,
    },
  });

  revalidatePath("/");
};
