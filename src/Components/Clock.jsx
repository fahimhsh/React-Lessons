import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick = () => {
    const { locale } = this.state;
    console.log("clicked!");
    if (locale === "bn-BD") {
      this.setState({ locale: "en-US" });
    } else {
      this.setState({ locale: "bn-BD" });
    }
  };

  render() {
    const { date, locale } = this.state;
    return (
      <>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <Button change={this.handleClick} />
      </>
    );
  }
}

export default Clock;
