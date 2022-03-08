import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputText) {
      alert("please add shits");
      return;
    }

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 100) + 1,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add Todos"
        value={inputText}
        onChange={inputHandler}
      />
      <button onClick={submitHandler} className="btn" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
      <select onChange={statusHandler}>
        <option value="all">All</option>
        <option value="compeleted">Compeleted</option>
        <option value="notcompeleted">Not-Compeleted</option>
      </select>
    </form>
  );
};

export default Form;
