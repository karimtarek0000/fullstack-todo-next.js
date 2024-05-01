"use client";

import Navbar from "@/components/Layout/Navbar";
import ConfirmDeleteTodoModal from "@/components/Modals/ConfirmDeleteTodoModal";
import TodoModal from "@/components/Modals/TodoModal";
import { Dialog } from "@/components/ui/dialog";
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
  props?: { id: string };
}
interface IDialogControlContext {
  dialog: IDialog;
  setDialog: Dispatch<SetStateAction<IDialog>>;
}
const modals = { TodoModal, ConfirmDeleteTodoModal };

export const DialogControlContext = createContext<IDialogControlContext>(
  {} as IDialogControlContext
);

function DialogControl({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState<IDialog>({
    status: false,
    compName: "TodoModal",
    props: { id: "" },
  });
  const Comp = modals[dialog.compName];

  return (
    <DialogControlContext.Provider value={{ dialog, setDialog }}>
      <main className="container mx-auto flex flex-col">
        <Navbar />
        {children}
      </main>
      <Dialog
        open={dialog.status}
        onOpenChange={() => setDialog((prev) => ({ ...prev, status: false }))}
      >
        <Comp {...dialog.props} />
      </Dialog>
    </DialogControlContext.Provider>
  );
}

export default DialogControl;
