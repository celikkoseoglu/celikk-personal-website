import React from "react";
import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return <h3 className="text-center">{text}</h3>;
};

Heading.propTypes = {
  text: PropTypes.string
};

Heading.defaultProps = {
  text: null
};

export default Heading;
