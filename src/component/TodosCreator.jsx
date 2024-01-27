import React from "react";
import "./main.css";

function TodosCreator({
  tasks,
  editTask,
  completedTask,
  deleteTask,
  setInputValue,
}) {
  return (
    <ul id="todo-list" className="list">
      {tasks.map((task) => (
        <li key={task.id}>
          <label className="checkbox">
            <input
              type="checkbox"
              onChange={() => completedTask(task.id)}
              checked={task.done}
            />
          </label>
          <input
            className="input-text"
            value={task.todo}
            onChange={(e) => setInputValue(e.target.value)}
          />{" "}
          <button
            className="edit-btn"
            onClick={() => editTask(task.id, task.todo)}
          >
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodosCreator;
