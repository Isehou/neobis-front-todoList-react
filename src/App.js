import "./App.css";

function App() {
  return (
    <div className="App">
      <section class="todo">
        <div class="todo__container">
          <h1 class="todo__title">
            What's up,
            <input id="title-input" type="text" placeholder="enter your name" />
          </h1>
          <form id="new-todo-form">
            <h4>CREATE A TODO</h4>
            <p class="subtitle">What's on your todo list?</p>
            <label class="input-box__label">
              <input
                id="input-box"
                class="input-box"
                type="text"
                placeholder="What do you want?"
              />
            </label>
            <div class="todo__category">
              <p class="subtitle">Pick a category</p>
              <div class="radio-btn__wrapper">
                <label class="radio-btn">
                  <input
                    id="category1"
                    class="radio-category circle"
                    type="radio"
                    value="business"
                    name="category"
                  />
                  <span class="circle business"></span>
                  <p>Business</p>
                </label>
                <label class="radio-btn">
                  <input
                    id="category2"
                    class="radio-category circle"
                    type="radio"
                    value="personal"
                    name="category"
                  />
                  <span class="circle personal"></span>
                  <p>Personal</p>
                </label>
              </div>
            </div>

            <button id="add-todo" class="add-todo__btn">
              ADD TODO
            </button>
          </form>
        </div>
        <div class="todo-tasks-list__container">
          <p class="subtitle">TODO LIST</p>
          <ul id="todo-list" class="list"></ul>
        </div>
      </section>
    </div>
  );
}

export default App;
