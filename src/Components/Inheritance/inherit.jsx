import React from "react";

class ParentComp extends React.Component {
  render() {
    return <h2>Parent Component</h2>;
  }
}

export default class ChildComp extends ParentComp {
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        {super.render()}
      </div>
    );
  }
}
