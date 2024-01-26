import React, { useState } from "react";
import TodosCreator from "./TodosCreator";
import TodoForm from "./TodoForm";

import "./main.css";

function TodoWrapper() {
  function uniqueID() {
    return Math.floor(Math.random() * 10000);
  }

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const newTask = {
      id: uniqueID(),
      todo: "",
      type: "",
      done: false,
      editable: false,
    };
    setTasks([...tasks, { newTask }]);
    // setInputValue(inputValue);
  }
  function editTask() {}
  function completedTask() {}
  function deleteTask() {}

  return (
    <section className="todo">
      <div className="todo__container">
        <h1 className="todo__title">
          What's up,
          <input id="title-input" type="text" placeholder="enter your name" />
        </h1>

        <TodoForm
          addTask={addTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div className="todo-tasks-list__container">
        <p className="subtitle">TODO LIST</p>
        {tasks.map((todo, index) => {
          <TodosCreator
            tasks={todo}
            key={index}
            editTask={editTask}
            completedTask={completedTask}
            deleteTask={deleteTask}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />;
        })}
      </div>
    </section>
  );
}

export default TodoWrapper;
