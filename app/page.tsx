import { getAllUserTodos } from "@/actions/todoAction";
import TodoCard from "@/components/Card/TodoCard";
import Navbar from "@/components/Layout/Navbar";
import GridList from "@/components/ui/GridList";
import { ITodo } from "@/interface";

export default async function Home() {
  const todos = await getAllUserTodos();

  const noTodos = !todos.length && (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-2xl">You have no todo 🥹</h1>
    </div>
  );

  return (
    <main className="flex flex-col container">
      <Navbar />
      <section className="grid md:grid-cols-2 gap-4">
        <GridList
          records={todos}
          renderComp={(todo) => <TodoCard key={todo.id} todo={todo as ITodo} />}
        />
      </section>

      {/* If no any todo */}
      {noTodos}
    </main>
  );
}
