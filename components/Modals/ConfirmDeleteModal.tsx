"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Loader2, Trash2 } from "lucide-react";
import { forwardRef, useRef } from "react";

interface IConfirmDeleteModal {
  deleteFn: () => Promise<any>;
  isLoading?: boolean;
}

// eslint-disable-next-line react/display-name
const ConfirmDeleteModal = forwardRef((props: IConfirmDeleteModal, ref) => {
  const { deleteFn, isLoading } = props;
  const closeModalRef = useRef<any>(null);

  const confirmModal = async () => {
    await deleteFn();
    closeModalRef.current.click();
  };

  return (
    <DropdownMenuItem>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={(e) => e.stopPropagation()}
            variant="outline"
            className="flex border-0 w-full items-center gap-1"
          >
            <Trash2 size={15} />
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Confirm for delete</DialogTitle>
            <DialogDescription className="text-xl">
              Are you sure want <span className="text-red-600">delete</span>{" "}
              this todo
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              disabled={isLoading}
              onClick={confirmModal}
              className="bg-red-600 text-white hover:bg-red-600/80"
              type="submit"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete
            </Button>
            <DialogClose ref={closeModalRef} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DropdownMenuItem>
  );
});

export default ConfirmDeleteModal;
