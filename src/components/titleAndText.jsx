import React, { Component } from "react";
import "./titleAndText.sass";

class TitleAndText extends Component {
  render() {
    return (
      <div className="row text-center">
        <div className="col-md-3" />
        <div className="col-md-6">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default TitleAndText;
