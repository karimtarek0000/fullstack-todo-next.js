"use client";
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
    <DialogControlContext.Provider value={{ setDialog }}>
      {children}
      <Dialog
        open={dialog.status}
        onOpenChange={() => setDialog({ status: false, compName: "TodoModal" })}
      >
        <Comp {...dialog.props} />
      </Dialog>
    </DialogControlContext.Provider>
  );
}

export default DialogControl;
