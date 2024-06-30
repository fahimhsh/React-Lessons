import React from "react";

class Form extends React.Component {
  state = {
    title: "Javascript",
    text: "is awesome",
    library: "React",
    isAwesome: true,
  };

  changeHandler = (e) => {
    let { type, value, checked } = e.target;

    if (type === "text") {
      this.setState({ title: value });
    } else if (type === "textarea") {
      this.setState({ text: value });
    } else if (type === "select-one") {
      this.setState({ library: value });
    } else if (type === "checkbox") {
      this.setState({ isAwesome: checked });
    } else {
      console.log(type);
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title, text, library, isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="Enter title..." value={title} onChange={this.changeHandler} />
          <br />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.changeHandler}></textarea>
          <br />
          <br />
          <select value={library} onChange={this.changeHandler}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input type="checkbox" onChange={this.changeHandler} checked={isAwesome} />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
