import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
function App() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="App">
      <h1>TODO-LIST</h1>
      <Form
        textInput={textInput}
        todos={todos}
        setTodos={setTodos}
        setTextInput={setTextInput}
        setStatus={setStatus}
      />
      <Todos filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
