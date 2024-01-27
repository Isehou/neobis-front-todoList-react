import React, { useState, useEffect } from "react";
import TodosCreator from "./TodosCreator";
import TodoForm from "./TodoForm";
import renderUniqueID from "./RenderUniqueID";

import "./main.css";

function TodoWrapper() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  function addTask() {
    const newTasks = [
      ...tasks,
      {
        id: renderUniqueID(),
        todo: inputValue,
        type: "",
        done: false,
        editable: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    console.log(newTasks);
  }

  function editTask(id) {
    console.log("edit");
    let editData = tasks.findIndex((task) => task.id === id);
  }
  function completedTask() {
    console.log("completed");
  }
  function deleteTask(id) {
    let deleteData = tasks.filter((index) => {
      return index.id !== id;
    });
    localStorage.setItem("tasks", JSON.stringify(deleteData));
    setTasks(deleteData);
  }

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
        <TodosCreator
          tasks={tasks}
          setInputValue={setInputValue}
          editTask={editTask}
          completedTask={completedTask}
          deleteTask={deleteTask}
        />
      </div>
    </section>
  );
}

export default TodoWrapper;
