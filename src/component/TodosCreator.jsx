import React from "react";
import "./main.css";

function TodosCreator({
  todo,
  inputValue,
  editTask,
  completedTask,
  deleteTask,
  setInputValue,
}) {
  return (
    <ul id="todo-list" className="list">
      {todo.map((index) => {
        <li key={index.id}>
          <label className="checkbox">
            <input type="checkbox" onchange={() => completedTask(index.id)} />
          </label>
          <input
            className="input-text"
            value={inputValue}
            onchange={(e) => setInputValue(e.target.value)}
          />
          <p>{inputValue}</p>
          <button
            id="edit"
            className="edit-btn"
            onclick={() => editTask(index.id)}
          >
            Edit
          </button>
          <button
            id="delete"
            className="delete-btn"
            onclick={() => deleteTask(index.id)}
          >
            Delete
          </button>
        </li>;
      })}
    </ul>
  );
}

export default TodosCreator;
