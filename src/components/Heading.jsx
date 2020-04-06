import React from "react";
import PropTypes from "prop-types";
import { title } from "../stylesheets/components/Heading.module.sass";

const Heading = ({ text, className }) => {
  return <h2 className={`${title} ${className}`}>{text}</h2>;
};

Heading.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  text: null,
  className: null,
};

export default Heading;
