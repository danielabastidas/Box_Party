import React from "react";
import "./Box.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.color);
    return (
      <div className="model-box" style={{ background: this.props.color }}></div>
    );
  }
}

export default Box;
