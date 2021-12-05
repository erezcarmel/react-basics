import TodoApp from "./components/TodoApp";
import "./styles.css";

export default (): JSX.Element => {
    return (
        <div className="app">
            <TodoApp />
        </div>
    );
};
