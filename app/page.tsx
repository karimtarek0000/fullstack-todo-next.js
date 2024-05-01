import { getAllTodos } from "@/actions/todoAction";
import TodoCard from "@/components/Card/TodoCard";
import ButtonOpenTodoModal from "@/components/Modals/ButtonOpenTodoModal";
import GridList from "@/components/ui/GridList";

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main>
      <ButtonOpenTodoModal />
      <div className="max-w-[400px]">
        <GridList
          records={todos}
          renderComp={(todo) => <TodoCard key={todo.id} todo={todo} />}
        />
      </div>
    </main>
  );
}
