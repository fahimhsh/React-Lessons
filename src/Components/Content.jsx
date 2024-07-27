import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../Contexts/themeContext";
import { useContext } from "react";

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h2>This is a Content</h2>
            <Counter>
                {(count, handler) => (
                    <HoverCounter
                        count={count}
                        handler={handler}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
