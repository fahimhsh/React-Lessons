const ClickCounter = ({ count, handler, theme, switchTheme }) => {
  let style;
  if (theme === "dark") {
    style = { backgroundColor: "#000", color: "#fff" };
  } else {
    style = null;
  }
  return (
    <div>
      <h1 onMouseOver={handler} style={style}>
        Hovered {count} times
      </h1>
      <button onClick={switchTheme}>Chage Theme</button>
    </div>
  );
};

export default ClickCounter;
