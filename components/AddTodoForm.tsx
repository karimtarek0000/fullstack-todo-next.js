"use client";

import { addNewTodo } from "@/actions/todoAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TStatus, TodoFormValues, status, todoFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const defaultValues: Partial<TodoFormValues> = {
  title: "",
  body: "",
  status: "todo",
};

function AddTodoForm() {
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: TodoFormValues) => {
    await addNewTodo(data);
  };

  return (
    <Dialog>
      {/* Trigger for open modal */}
      <DialogTrigger asChild>
        <Button variant="outline">Add new todo</Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="sm:max-w-[425px]">
        {/* Header */}
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
        </DialogHeader>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Name */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Go to supermarket" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-white/90" />
                </FormItem>
              )}
            />

            {/* Textarea */}
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write description about this"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-white/90" />
                </FormItem>
              )}
            />

            {/* Select status */}
            <Select
              name="status"
              onValueChange={(state: TStatus) =>
                form.setValue("status", state as TStatus)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder={form.getValues("status")} />
              </SelectTrigger>
              <SelectContent defaultValue={form.getValues("status")}>
                <SelectGroup>
                  {status.map((stat) => {
                    return (
                      <SelectItem
                        className="capitalize"
                        key={stat}
                        value={stat}
                      >
                        {stat}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button type="submit">Save changes</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTodoForm;
