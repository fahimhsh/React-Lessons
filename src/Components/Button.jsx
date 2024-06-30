import React from "react";

class Button extends React.Component {
  render() {
    const { change, locale } = this.props;
    return <button onClick={change}>{locale === "en-US" ? "Switch to English" : "বাংলায় সুইচ করুন"}</button>;
  }
}

export default Button;
