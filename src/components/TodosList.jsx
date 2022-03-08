import React from "react";
import Todo from "./Todo";

const TodosList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todos">
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodosList;
