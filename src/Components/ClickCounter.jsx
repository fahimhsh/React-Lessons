import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { count, handler } = props;
  return (
    <div>
      <button onClick={handler}>Clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter);
