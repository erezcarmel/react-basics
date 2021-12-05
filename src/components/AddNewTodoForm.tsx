import * as React from "react";
import { useTodos } from "../context";
import "../styles.css";

export default (): JSX.Element => {
  const [text, setText] = React.useState<string>("");
  const { add } = useTodos();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add(text);
  };

  return (
      <form className="todo-form" onSubmit={onSave}>
        <input type="text" id="text" value={text} onChange={onChange} />
        <input type="submit" value="Add" />
      </form>
  );
};
