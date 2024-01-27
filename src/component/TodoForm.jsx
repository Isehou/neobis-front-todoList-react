import React, { useState } from "react";
import "./main.css";

function TodoForm({
  addTask,
  inputValue,
  setInputValue,
  category,
  setCategory,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Input value on submit: ", inputValue);
    if (inputValue !== "") {
      addTask();
    }
  }
  return (
    <>
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <h4>CREATE A TODO</h4>
        <p className="subtitle">What's on your todo list?</p>
        <label className="input-box__label">
          <input
            className="input-box"
            type="text"
            placeholder="What do you want?"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </label>

        <div className="todo__category">
          <p className="subtitle">Pick a category</p>
          <div className="radio-btn__wrapper">
            <label className="radio-btn">
              <input
                className="radio-category radio"
                type="radio"
                name="category"
                checked={category === "business"}
                onChange={(e) => setCategory("business")}
              />
              <span className="business radio"></span>
              <p>Business</p>
            </label>
            <label className="radio-btn">
              <input
                className="radio-category radio"
                type="radio"
                name="category"
                checked={category === "personal"}
                onChange={(e) => setCategory("personal")}
              />
              <span className="personal radio"></span>
              <p>Personal</p>
            </label>
          </div>
        </div>

        <button className="add-todo__btn" onClick={addTask}>
          ADD TODO
        </button>
      </form>
    </>
  );
}

export default TodoForm;
