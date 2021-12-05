import * as React from "react";
import { ITodoItem } from "./interfaces";

const TodoContext = React.createContext(null);
export const useTodos = () => React.useContext(TodoContext);

interface IProps {
  className?: string;
  children?: any;
}

export default function TodoProvider({ children }: IProps): JSX.Element {
  const [todos, setTodos] = React.useState<ITodoItem[]>([]);

  const getId = (id: any) => id + 1;
  const add = (text: string) =>
      setTodos([
        ...todos,
        {
          id: todos.length ? getId(todos[todos.length - 1].id) : 1,
          text,
        },
      ]);

  const remove = (todo: ITodoItem) =>
      setTodos(todos.filter((item: ITodoItem) => item.id !== todo.id));

  const update = (todo: ITodoItem) => {
    const idx: number = todos.findIndex((item: ITodoItem) => item.id === todo.id);
    const updateItem: ITodoItem[] = todos;
    updateItem[idx] = todo;
    setTodos(updateItem);
  };

  return (
      <TodoContext.Provider
        value={{
            add,
            remove,
            todos,
            update,
        }}>
        {children}
      </TodoContext.Provider>
  );
}
