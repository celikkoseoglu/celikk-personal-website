import React from "react";
import PropTypes from "prop-types";
import Bulletpoint from "./Bulletpoint";

const Experience = ({ companyName, description, bulletPoints }) => {
  return (
    <div>
      <h5> {companyName} </h5>
      <p> {description} </p>
      {bulletPoints.map((bulletPoint) => (
        <Bulletpoint bulletPoint={bulletPoint} />
      ))}
    </div>
  );
};

Experience.propTypes = {
  companyName: PropTypes.string,
  description: PropTypes.string,
  bulletPoints: PropTypes.arrayOf(PropTypes.string),
};

Experience.defaultProps = {
  companyName: null,
  description: null,
  bulletPoints: null,
};

export default Experience;
