import React from "react";
import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return <h2 className="text-center">{text}</h2>;
};

Heading.propTypes = {
  text: PropTypes.string
};

Heading.defaultProps = {
  text: null
};

export default Heading;
