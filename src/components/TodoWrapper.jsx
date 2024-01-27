import React, { useState, useEffect } from "react";
import TodosCreator from "./TodosCreator";
import TodoForm from "./TodoForm";
import renderUniqueID from "./RenderUniqueID";

import "./main.css";

function TodoWrapper() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState("business"); // business or personal category

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
        category,
        done: false,
        editable: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setInputValue("");
  }

  function editTask(id, text) {
    const index = tasks.findIndex((index) => index.id === id);
    const newTasks = [...tasks];
    newTasks[index].todo = text;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function deleteTask(id) {
    let newTasks = tasks.filter((index) => {
      return index.id !== id;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function completedTask(id) {
    const index = tasks.findIndex((index) => index.id === id);
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
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
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="todo-tasks-list__container">
        <p className="subtitle">TODO LIST</p>
        <TodosCreator
          category={category}
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
