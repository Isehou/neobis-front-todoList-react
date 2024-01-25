import React, { useState } from "react";
import TodoCreator from "./TodoCreator";
import TodoForm from "./TodoForm";

import "./main.css";

function TodoList() {
  function uniqueID() {
    return Math.floor(Math.random() * 10000);
  }

  const [task, setTask] = useState({
    id: uniqueID(),
    taks: "",
    type: "",
    done: false,
    editable: false,
  });
  const [tasks, setTasks] = useState([]);

  function addTask() {
    console.log("click");
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

        <TodoForm addTask={addTask} />
      </div>
      <TodoCreator
        tasks={tasks}
        editTask={editTask}
        completedTask={completedTask}
        deleteTask={deleteTask}
      />
    </section>
  );
}

export default TodoList;
