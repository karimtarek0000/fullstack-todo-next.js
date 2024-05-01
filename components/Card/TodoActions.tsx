"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogControlContext } from "@/context/DialogControl";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { useContext } from "react";

function TodoActions({ id }: { id: string }) {
  const { setDialog } = useContext(DialogControlContext);

  return (
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
        <DropdownMenuItem asChild>
          <Button
            onClick={() =>
              setDialog({
                status: true,
                compName: "ConfirmDeleteTodoModal",
                props: { id },
              })
            }
            variant="outline"
            className="flex w-full items-center gap-1 ring-0 focus-visible:ring-0 border-0 hover:ring-0 focus-visible:ring-offset-0"
          >
            <Trash2 size={15} />
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TodoActions;
