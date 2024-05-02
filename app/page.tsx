import { getAllTodos } from "@/actions/todoAction";
import TodoCard from "@/components/Card/TodoCard";
import Navbar from "@/components/Layout/Navbar";
import GridList from "@/components/ui/GridList";
import { ITodo } from "@/interface";

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main className="flex flex-col container">
      <Navbar />
      <section className="grid grid-cols-2 gap-4">
        <GridList
          records={todos}
          renderComp={(todo) => <TodoCard key={todo.id} todo={todo as ITodo} />}
        />
      </section>
    </main>
  );
}
