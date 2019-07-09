import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div>
        <h5> {this.props.header} </h5>
        <p> {this.props.content} </p>
      </div>
    );
  }
}

export default Skill;
