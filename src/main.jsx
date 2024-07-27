import React from "react";
import ReactDOM from "react-dom";

// Custom useState hook
let states = [];
let stateIndex = -1;

const useState = (defaultValue) => {
    const index = ++stateIndex;

    if (states[index]) return states[index];

    const setValue = (newValue) => {
        states[index][0] = newValue;
        daddysRendering();
    };

    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
};

const App = () => {
    const [todo, setTodo] = useState("");
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warningMessage = inputValue.includes(".js")
            ? "You need to learn JS"
            : null;

        setTodo(inputValue);
        setWarning(warningMessage);
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

function daddysRendering() {
    stateIndex = -1;
    ReactDOM.render(<App />, document.getElementById("root"));
}

// Initial render
daddysRendering();
