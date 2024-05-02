"use client";

import Navbar from "@/components/Layout/Navbar";
import ConfirmDeleteTodoModal from "@/components/Modals/ConfirmDeleteTodoModal";
import TodoModal from "@/components/Modals/TodoModal";
import { Dialog } from "@/components/ui/dialog";
import { ITodo } from "@/interface";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TModalsName = "TodoModal" | "ConfirmDeleteTodoModal";

interface IDialog {
  status: boolean;
  compName: TModalsName;
  props?: Partial<ITodo>;
}
interface IDialogControlContext {
  dialog: IDialog;
  setDialog: Dispatch<SetStateAction<IDialog>>;
  closeModal: () => void;
}
const modals = { TodoModal, ConfirmDeleteTodoModal };

export const DialogControlContext = createContext<IDialogControlContext>(
  {} as IDialogControlContext
);

function DialogControl({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState<IDialog>({
    status: false,
    compName: "ConfirmDeleteTodoModal",
    props: {} as ITodo,
  });
  const Comp = modals[dialog.compName];

  // ----------------- HANDLER -----------------
  const closeModal = () => {
    setDialog((prev) => ({ ...prev, props: {}, status: false }));
  };

  return (
    <DialogControlContext.Provider value={{ dialog, setDialog, closeModal }}>
      {children}
      <Dialog open={dialog.status} onOpenChange={closeModal}>
        <Comp {...dialog.props} />
      </Dialog>
    </DialogControlContext.Provider>
  );
}

export default DialogControl;
