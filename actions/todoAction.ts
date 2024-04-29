"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.user.findMany();
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
