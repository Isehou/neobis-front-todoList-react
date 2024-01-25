import React from "react";
import "./main.css";

function TodoCreator({ tasks, editTask, completedTask, deleteTask }) {
  return (
    <div className="todo-tasks-list__container">
      <p className="subtitle">TODO LIST</p>
      {tasks.map((index, element) => {
        <ul id="todo-list" className="list">
          <label className="checkbox">
            <input type="checkbox" onchange={completedTask} />
          </label>
          <input className="input-text" />
          <button id="edit" className="edit-btn" onclick={editTask}>
            Edit
          </button>
          <button id="delete" className="delete-btn" onclick={deleteTask}>
            Delete
          </button>
        </ul>;
      })}
    </div>
  );
}

export default TodoCreator;
