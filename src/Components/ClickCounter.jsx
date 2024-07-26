const ClickCounter = ({ count, handler }) => {
  return (
    <div>
      <button onClick={handler}>Clicked {count} times</button>
    </div>
  );
};

export default ClickCounter;
