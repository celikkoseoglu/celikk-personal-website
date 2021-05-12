import React from "react";
import PropTypes from "prop-types";
import { title, headingMargin } from "../stylesheets/components/Heading.module.sass";

const Heading = ({ text, className, marginBottom }) => (
  <h2 className={`${title} ${className} ${marginBottom ? headingMargin : null}`}>{text}</h2>
);

Heading.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  marginBottom: PropTypes.bool,
};

Heading.defaultProps = {
  text: null,
  className: null,
  marginBottom: false,
};

export default Heading;
