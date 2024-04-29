import TodoActions from "@/components/Card/TodoActions";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TStatus } from "@/schema";
import { Circle, CircleCheck, CircleDot } from "lucide-react";

export interface ITodoCard {
  id: string;
  title: string;
  body: string | null;
  status: TStatus;
}
const icons = {
  complete: <CircleCheck />,
  progress: <CircleDot />,
  todo: <Circle />,
};

function TodoCard({ todo }: { todo: ITodoCard }) {
  const { id, title, body, status } = todo;

  return (
    <Card className="border border-white/30">
      <CardHeader className="space-y-4 p-5">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm flex items-center gap-1 capitalize text-orange-200">
            {icons[status]} {status}
          </CardTitle>
          <TodoActions id={id} />
        </div>

        <CardTitle>{title}</CardTitle>
        <CardDescription>{body}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default TodoCard;
