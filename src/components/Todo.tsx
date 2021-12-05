import { ITodo } from "../interfaces";
import "../styles.css";

export default (props: ITodo): JSX.Element => <div className="todo"> { props.children } </div>;
