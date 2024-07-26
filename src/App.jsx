import React from "react";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import Section from "./Components/Section";
import ThemeContext from "./Components/Contexts/themeContext";

export default class App extends React.Component {
    state = {
        theme: "dark",
    };
    render() {
        const { theme } = this.state;
        return (
            <>
                <Counter>
                    {(count, handler) => (
                        <ClickCounter count={count} handler={handler} />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme: theme }}>
                    <Section />
                </ThemeContext.Provider>
            </>
        );
    }
}
