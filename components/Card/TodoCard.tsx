import TodoActions from "@/components/Card/TodoActions";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ITodo } from "@/interface";
import { Circle, CircleCheck, CircleDot } from "lucide-react";

const icons = {
  complete: <CircleCheck />,
  progress: <CircleDot />,
  todo: <Circle />,
};

function TodoCard({ todo }: { todo: ITodo }) {
  const { title, body, status } = todo;

  return (
    <Card className="border dark:border-white/30 border-black/30">
      <CardHeader className="space-y-4 p-5">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm flex items-center gap-1 capitalize text-black/80 dark:text-orange-200">
            {icons[status]} {status}
          </CardTitle>
          <TodoActions todo={todo} />
        </div>

        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-lg">{body}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default TodoCard;
