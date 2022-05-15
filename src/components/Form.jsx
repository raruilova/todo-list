import { useState } from "react";
import { generateId } from "../utils/generateId";

const Form = ({saveTodo}) => {
    const [todo, setTodo] = useState({
        id: generateId(),
        todo: '',
        completed: false
    });

    const handleChange = e => {
        setTodo({
            ...todo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.todo === '' || todo.todo.length < 1) {
            alert('Ingresa una tarea');
            return;
        }
        saveTodo(todo);
        setTodo({
            id: generateId(),
            todo: ''
        });

    }
  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="todo"
          name="todo"
          value={todo.todo}
          placeholder="Ingresa una tarea"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Tarea</label>
      </div>
      <input type="submit" value="Guardar" className="btn btn-primary mt-3" />
    </form>
  );
};

export default Form;
