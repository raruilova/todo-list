import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import useTodo from "./hooks/useTodo";

function App() {
  const { saveTodo, todos, completedTodo, deleteTodo } = useTodo();
  return (
    <div className="container">
      <Navbar />
      <Form saveTodo = {saveTodo} />
      <Todo todos = {todos} completedTodo = {completedTodo} deleteTodo = {deleteTodo} />
    </div>
  );
}

export default App;
