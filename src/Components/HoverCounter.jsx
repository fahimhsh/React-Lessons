const ClickCounter = ({ count, handler }) => {
  return (
    <div>
      <h1 onMouseOver={handler}>Hovered {count} times</h1>
    </div>
  );
};

export default ClickCounter;
