"use client";

import { addNewTodo, updateTodo } from "@/actions/todoAction";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DialogControlContext } from "@/context/DialogControl";
import { ITodo } from "@/interface";
import {
  TodoFormValues,
  status as selectStatus,
  todoFormSchema,
} from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function TodoModal(props: ITodo) {
  const { id, title = "", body = "", status = "todo" } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { dialog, closeModal } = useContext(DialogControlContext);
  const defaultValues: Partial<TodoFormValues> = {
    title,
    body,
    status,
  };

  // ----------------- HANDLER -----------------
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });
  const fnWithAction = (data: ITodo) => {
    return id ? updateTodo({ ...data, id }) : addNewTodo(data);
  };
  const onSubmit = async (data: ITodo) => {
    try {
      setIsLoading(true);
      await fnWithAction(data);
      closeModal();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!dialog.status) form.clearErrors();
    form.setValue("title", title);
    form.setValue("body", body);
    form.setValue("status", status);
  }, [body, dialog.status, form, status, title]);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl">
          {id ? "Edit todo" : "Add new todo"}
        </DialogTitle>
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
                <FormLabel className="text-white text-lg">Title</FormLabel>
                <FormControl>
                  <Input placeholder="Go to supermarket" {...field} />
                </FormControl>
                <FormMessage className="text-white/80" />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Description</FormLabel>
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
                <FormLabel className="text-lg">
                  Chooce status default one (todo)
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="capitalize">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectStatus.map((stat) => {
                      return (
                        <SelectItem
                          className="capitalize text-lg"
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
          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              className="text-sm"
              type="button"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              disabled={isLoading}
              className="text-sm"
              type="submit"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {id ? "Update" : "Add"}
            </Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}

export default TodoModal;
