import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Counter from "./Components/Counter";

function App() {
    return (
        <>
            <Counter>
                {(count, handler) => (
                    <ClickCounter count={count} handler={handler} />
                )}
            </Counter>
            <Counter>
                {(count, handler) => (
                    <HoverCounter count={count} handler={handler} />
                )}
            </Counter>
        </>
    );
}

export default App;
