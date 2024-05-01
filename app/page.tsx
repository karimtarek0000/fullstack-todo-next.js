import { getAllTodos } from "@/actions/todoAction";
import TodoCard from "@/components/Card/TodoCard";
import ButtonOpenTodoModal from "@/components/Modals/ButtonOpenTodoModal";
import GridList from "@/components/ui/GridList";

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <div className="grid grid-cols-2 gap-4">
      <GridList
        records={todos}
        renderComp={(todo) => <TodoCard key={todo.id} todo={todo} />}
      />
    </div>
  );
}
