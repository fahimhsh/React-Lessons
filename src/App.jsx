import React from "react";
import Clock from "./Components/Clock";
import ClockList from "./Components/ClockList";

class App extends React.Component {
  render() {
    const quantities = [1, 2, 3];
    return (
      <>
        <ClockList quantities={quantities} />
      </>
    );
  }
}
export default App;
