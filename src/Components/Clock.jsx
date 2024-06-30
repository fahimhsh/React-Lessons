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
    // let button;
    // if (locale === "bn-BD") {
    //   button = <Button change={this.handleClick}>Switch to English!</Button>;
    // } else {
    //   button = <Button change={this.handleClick}>বাংলায় পরিবর্তন করুন!</Button>;
    // }
    return (
      <>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" />
        )}
      </>
    );
  }
}

export default Clock;
