import TodoActions from "@/components/Card/TodoActions";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TodoCard() {
  return (
    <Card className="border border-white/30">
      <CardHeader className="space-y-4 p-5">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm text-orange-200">Complete</CardTitle>
          <TodoActions />
        </div>

        <CardTitle>Todo</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          nesciunt, asperiores numquam quibusdam dolor aut ipsam nihil corrupti
          facilis dignissimos quasi, sunt accusamus velit dolores saepe ea
          corporis mollitia incidunt!
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default TodoCard;
