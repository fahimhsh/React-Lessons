import { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [warning, setWarning] = useState("");

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes(".js")
            ? "You need to learn JS"
            : null;

        setTodo(inputValue);
        setWarning(warning);
    };

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea
                    name="todo"
                    value={todo}
                    onChange={handleInput}
                ></textarea>
            </p>
            <hr />
            <h2>{warning || "Good Choice!"}</h2>
        </div>
    );
};

export default Todo;
