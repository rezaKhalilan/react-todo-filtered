import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "compeleted":
          setFilteredTodos(todos.filter((item) => item.completed === true));
          break;
        case "notcompeleted":
          setFilteredTodos(todos.filter((item) => item.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  //save to local

  const saveToLocal = () => {
    localStorage.setItem("todosFromStorage", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todosFromStorage") === null) {
      localStorage.setItem("todosFromStorage", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todosFromStorage"));
      setTodos(local);
    }
  };

  return (
    <div className="container">
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodosList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
