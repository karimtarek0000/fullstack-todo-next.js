"use client";
import { Button } from "@/components/ui/button";
import { DialogControlContext } from "@/context/DialogControl";
import { useContext } from "react";

function ButtonOpenTodoModal() {
  const { setDialog } = useContext(DialogControlContext);

  return (
    <Button
      className="capitalize text-lg"
      onClick={() =>
        setDialog({
          status: true,
          compName: "TodoModal",
        })
      }
    >
      add new todo
    </Button>
  );
}

export default ButtonOpenTodoModal;
