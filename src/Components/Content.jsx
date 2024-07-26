import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./Contexts/themeContext";

export default function Content() {
    return (
        <div>
            <h2>This is a Content</h2>
            <Counter>
                {(count, handler) => {
                    return (
                        <ThemeContext.Consumer>
                            {({ theme }) => (
                                <HoverCounter
                                    count={count}
                                    handler={handler}
                                    theme={theme}
                                />
                            )}
                        </ThemeContext.Consumer>
                    );
                }}
            </Counter>
        </div>
    );
}
