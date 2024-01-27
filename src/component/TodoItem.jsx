import React, { useRef } from "react";

function TodoItem({
  task,
  category,
  editTask,
  completedTask,
  deleteTask,
  setInputValue,
}) {
  const inputRef = useRef();
  return (
    <li className={`${task.done ? "completed" : ""} ${task.category}`}>
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
        ref={inputRef}
        onChange={(e) => editTask(task.id, e.target.value)}
      />
      <button className="edit-btn" onClick={() => inputRef.current.focus()}>
        Edit
      </button>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
