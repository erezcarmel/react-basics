import * as React from "react";
import "../styles.css";
import AddForm from "./AddNewTodoForm";
import TodoProvider from "../context";
import TodoList from "./TodoList";

export default (): JSX.Element => {
    return (
        <TodoProvider className="todo-app">
            <AddForm />
            <TodoList />
        </TodoProvider>
    );
};
