import TodoList from "./TodoList";

const Todo = ({ todos, completedTodo, deleteTodo }) => {
  return (
    <table className="table table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Pendiente</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr onClick={() => completedTodo(todo.id)}>
            <TodoList todo={todo} index = {index + 1} deleteTodo={deleteTodo}  key={todo.id} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Todo;
