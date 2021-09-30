import React from "react";
import "./styles/Form.css";
const Form = ({ todos, setTodos, setTextInput, textInput, setStatus }) => {
  const setTexttInput = (e) => {
    setTextInput(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: textInput, completed: false, id: Math.random() * 1000 },
    ]);
    setTextInput("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="form">
      <div className="search-bar">
        <input value={textInput} onChange={setTexttInput} type="text" />
        <button onClick={submitTodo} type="submit" className="add-todo-btn">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <select
        onChange={statusHandler}
        className="drop-down"
        name="drop-down"
        id="dropdown"
      >
        <option value="All">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Form;
