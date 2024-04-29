"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
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
          onClick={confirmModal}
          className="ring-0 bg-red-700 text-white hover:bg-red-700/80"
          type="submit"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Delete
        </Button>
        <DialogClose ref={closeModalRef} />
      </DialogFooter>
    </DialogContent>
  );
});

export default ConfirmDeleteModal;
