import React, { useState } from "react";
import "./main.css";

function TodoForm({ addTask, inputValue, setInputValue }) {
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Input value on submit: ", inputValue);

    addTask(inputValue);
    setInputValue("");
  }

  return (
    <>
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <h4>CREATE A TODO</h4>
        <p className="subtitle">What's on your todo list?</p>
        <label className="input-box__label">
          <input
            id="input-box"
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
                id="category1"
                className="radio-category radio"
                type="radio"
                value="business"
                name="category"
                onChange={addTask}
              />
              <span className="business radio"></span>
              <p>Business</p>
            </label>
            <label className="radio-btn">
              <input
                id="category2"
                className="radio-category radio"
                type="radio"
                value="personal"
                name="category"
                onChange={addTask}
              />
              <span className="personal radio"></span>
              <p>Personal</p>
            </label>
          </div>
        </div>

        <button id="add-todo" className="add-todo__btn" onClick={addTask}>
          ADD TODO
        </button>
      </form>
    </>
  );
}

export default TodoForm;
