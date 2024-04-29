import AddTodoForm from "@/components/AddTodoForm";
import TodoCard from "@/components/Card/TodoCard";

export default function Home() {
  return (
    <main>
      <AddTodoForm />

      <div className="max-w-[400px]">
        <TodoCard />
      </div>
    </main>
  );
}
