"use client";
import { deleteTodo } from "@/actions/todoAction";
import ConfirmDeleteModal from "@/components/Modals/ConfirmDeleteModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ConfirmDeleteModal
          deleteFn={deleteTodoHandler}
          isLoading={isLoading}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TodoActions;

// <Dialog.Root>
//   <DropdownMenu.Root>
//     <DropdownMenu.Trigger>Dropdown Menu</DropdownMenu.Trigger>
//     <DropdownMenu.Portal>
//       <DropdownMenu.Content>
//         <Dialog.Trigger>
//           <DropdownMenu.Item>"Test"</DropdownMenu.Item>
//         </Dialog.Trigger>
//       </DropdownMenu.Content>
//     </DropdownMenu.Portal>
//   </DropdownMenu.Root>
//   <Dialog.Portal>
//     <Dialog.Overlay className="DialogOverlay" />
//     <Dialog.Content className="DialogContent">
//       This is a modal.
//     </Dialog.Content>
//   </Dialog.Portal>
// </Dialog.Root>;
