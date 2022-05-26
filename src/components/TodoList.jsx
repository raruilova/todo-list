const TodoList = ({todo, index, deleteTodo}) => {
  return (
    <>
        <th scope="row">{index}</th>
        <td>{todo.todo}</td>
        <td>{todo.completed ? 'Completado' : 'Incompleto'}</td>
        <th> <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Eliminar</button> </th>
    </>
  );
};

export default TodoList;
