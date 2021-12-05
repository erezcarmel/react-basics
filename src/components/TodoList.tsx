import * as React from "react";
import { useTodos } from "../context";
import { ITodoItem } from "../interfaces";
import Todo from "./Todo";
import "../styles.css";

export default (): JSX.Element => {
  const [editable, setEditable] = React.useState<number>();
  const { todos, update, remove } = useTodos();

  return (
      <div className="todo-list">
        {todos.map((todoItem: ITodoItem) => (
            <Todo key={todoItem.id}>
              {editable === todoItem.id ? (
                  <input
                      defaultValue={todoItem.text}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          update({ ...todoItem, text: e.currentTarget.value })
                      }
                  />
              ) : (
                  <p>{todoItem.text}</p>
              )}
              <div className="buttons">
                <button className="delete" onClick={() => remove(todoItem)}>
                  Delete
                </button>

                {editable === todoItem.id ? (
                    <button className="save" onClick={() => setEditable(-1)}>
                      Save
                    </button>
                ) : (
                    <button className="edit" onClick={() => setEditable(todoItem.id as number)}>
                      Edit
                    </button>
                )}
              </div>
            </Todo>
        ))}
      </div>
  );
};
