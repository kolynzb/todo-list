import React from "react";
import "./styles/Todos.css";
import Todo from "./Todo";
const Todos = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      {filteredTodos.map((todo) => (
        <Todo
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          key={todo.id}
          text={todo.text}
        />
      ))}
    </div>
  );
};

export default Todos;
