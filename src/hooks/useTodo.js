import { useState } from "react";

const useTodo = () => {
    const [todos, setTodos] = useState([]);
    const saveTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const completedTodo = (id) => {
        const newTodos = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo );
        setTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos);
    }

    return {
        saveTodo,
        todos,
        completedTodo,
        deleteTodo
    }
}

export default useTodo;