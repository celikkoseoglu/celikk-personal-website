import React from "react";
import PropTypes from "prop-types";
import {
  dark,
  thickDark,
  light,
  thickLight,
  clearBorder,
} from "../../stylesheets/components/Util/HorizontalRuler.module.sass";

const HorizontalRuler = ({ isDark, isThick, className }) => (
  <hr
    className={`${className} ${clearBorder} ${
      // eslint-disable-next-line no-nested-ternary
      isDark ? (isThick ? thickDark : dark) : isThick ? thickLight : light
    }`}
  />
);

HorizontalRuler.propTypes = {
  isDark: PropTypes.bool,
  isThick: PropTypes.bool,
  className: PropTypes.string,
};

HorizontalRuler.defaultProps = {
  isDark: false,
  isThick: false,
  className: null,
};

export default HorizontalRuler;
