import React from "react";
import "./main.css";
import TodoItem from "./TodoItem";

function TodosCreator({
  category,
  tasks,
  editTask,
  completedTask,
  deleteTask,
  setInputValue,
}) {
  return (
    <ul id="todo-list" className="list">
      {tasks
        // .filter((el) => el.category === category)
        .map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            category={category}
            editTask={editTask}
            completedTask={completedTask}
            deleteTask={deleteTask}
            setInputValue={setInputValue}
          />
        ))}
    </ul>
  );
}

export default TodosCreator;
