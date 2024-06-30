import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProp) {
    const { change: currentChange } = this.props;
    const { change: nextChange } = nextProp;
    if (currentChange === nextChange) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return <button onClick={this.props.change}>Switch Language</button>;
  }
}

export default Button;
