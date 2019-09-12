import React from "react";
import PropTypes from "prop-types";
import {
  paddingDefault,
  titleFontSize
} from "../stylesheets/components/Heading.module.sass";

const Heading = ({ text }) => {
  return (
    <h2 className={`d-block text-center ${paddingDefault} ${titleFontSize}`}>
      {text}
    </h2>
  );
};

Heading.propTypes = {
  text: PropTypes.string
};

Heading.defaultProps = {
  text: null
};

export default Heading;
