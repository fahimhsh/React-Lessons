import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { count, handler } = props;
  return (
    <div>
      <h1 onMouseOver={handler}>Hovered {count} times</h1>
    </div>
  );
};

export default withCounter(HoverCounter);
