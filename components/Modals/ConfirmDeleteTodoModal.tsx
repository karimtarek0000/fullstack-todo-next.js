"use client";

import { deleteTodo } from "@/actions/todoAction";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogControlContext } from "@/context/DialogControl";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";

export default function ConfirmDeleteTodoModal({ id = "" }: { id?: string }) {
  // ----------------- STATE -----------------
  const { setDialog } = useContext(DialogControlContext);
  const [isLoading, setLoading] = useState(false);

  // ----------------- HANDLER -----------------
  const deleteTodoHandler = async () => {
    try {
      setLoading(true);
      await deleteTodo(id);
      setDialog((prev) => ({ ...prev, status: false }));
    } catch (error) {
      console.log("delete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl">Confirm for delete</DialogTitle>
        <DialogDescription className="text-xl">
          Are you sure want <span className="text-red-600">delete</span> this
          todo
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button
          disabled={isLoading}
          onClick={deleteTodoHandler}
          className="ring-0 bg-red-700 text-white hover:bg-red-700/80"
          type="submit"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
