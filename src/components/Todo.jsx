import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="todo-container">
      <li className={`${todo.completed ? "completed" : ""} `}>{todo.text}</li>
      <div className="btn-container">
        <button onClick={completeHandler} className="btn">
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="btn">
          <i className="fa-solid fa-ban"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
