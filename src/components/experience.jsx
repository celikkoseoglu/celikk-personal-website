import React, { Component } from "react";
import BulletPoint from "./bulletpoint";

class Experience extends Component {
  render() {
    return (
      <div>
        <h5> {this.props.companyName} </h5>
        <p> {this.props.description} </p>
        {this.props.bulletPoints.map(bulletPoint => (
          <BulletPoint bulletPoint={bulletPoint} />
        ))}
      </div>
    );
  }
}

export default Experience;
