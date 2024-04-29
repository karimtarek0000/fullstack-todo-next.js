"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.todo.findMany();
};

export const addNewTodo = async ({ title, body, status }: TodoFormValues) => {
  return await prisma.todo.create({
    data: {
      title,
      body,
      status,
    },
  });
};

export const deleteTodo = async (id: string) => {
  return await prisma.todo.delete({
    where: {
      id,
    },
  });
};
