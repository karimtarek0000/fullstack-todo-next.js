"use client";
import { deleteTodo } from "@/actions/todoAction";
import ConfirmDeleteModal from "@/components/Modals/ConfirmDeleteModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";

function TodoActions({ id }: { id: string }) {
  const [isLoading, setLoading] = useState(false);

  // ----------------- HANDLER -----------------
  const deleteTodoHandler = async () => {
    try {
      setLoading(true);
      await deleteTodo(id);
    } catch (error) {
      console.log("delete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-transparent"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DialogTrigger asChild>
            <DropdownMenuItem asChild>
              <Button
                variant="outline"
                className="flex w-full items-center gap-1 ring-0 focus-visible:ring-0 border-0 hover:ring-0 focus-visible:ring-offset-0"
              >
                <Trash2 size={15} />
                Delete
              </Button>
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal */}
      <ConfirmDeleteModal deleteFn={deleteTodoHandler} isLoading={isLoading} />
    </Dialog>
  );
}

export default TodoActions;
