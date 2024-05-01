"use client";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { addNewTodo } from "@/actions/todoAction";
import { Input } from "@/components/ui/input";
import { TodoFormValues, status, todoFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const defaultValues: Partial<TodoFormValues> = {
  title: "",
  body: "",
  status: "todo",
};

function TodoModal() {
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: TodoFormValues) => {
    await addNewTodo(data);
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl">Add new todo</DialogTitle>
      </DialogHeader>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Title */}
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

          {/* Description */}
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
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chooce status default one (todo)</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit">Save changes</Button>
        </form>
      </Form>
    </DialogContent>
  );
}

export default TodoModal;
