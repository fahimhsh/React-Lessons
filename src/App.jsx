import React from "react";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import Section from "./Components/Section";
import ThemeContext from "./Contexts/themeContext";

export default class App extends React.Component {
    state = {
        theme: "dark",
        switchTheme: () => {
            this.setState((prevState) => {
                if (prevState.theme === "dark") {
                    return {
                        theme: "light",
                    };
                } else {
                    return {
                        theme: "dark",
                    };
                }
            });
        },
    };
    render() {
        return (
            <>
                <Counter>
                    {(count, handler) => (
                        <ClickCounter count={count} handler={handler} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </>
        );
    }
}
