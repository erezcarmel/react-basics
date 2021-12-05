import React from "react";
import Todo from "./Todo";
import Todos from '../todos.json';
import "../styles.css";

export default () => {
  return (
    <div className="todo-list">
      {Todos.map((todo) => (
        <Todo key={todo.id}>
          <p>{todo.text}</p>
        </Todo>
      ))}
    </div>
  );
};
