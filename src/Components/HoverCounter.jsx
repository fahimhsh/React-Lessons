const ClickCounter = ({ count, handler, theme }) => {
    let style;
    if (theme === "dark") {
        style = { backgroundColor: "#000", color: "#fff" };
    } else if (theme === "light") {
        style = { backgroundColor: "#fff", color: "#000" };
    } else {
        style = null;
    }
    return (
        <div>
            <h1 onMouseOver={handler} style={style}>
                Hovered {count} times
            </h1>
        </div>
    );
};

export default ClickCounter;
