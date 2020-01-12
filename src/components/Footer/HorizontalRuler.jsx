import React from "react";
import PropTypes from "prop-types";
import { dark, light } from "../../stylesheets/components/Footer/HorizontalRuler.module.sass";

const HorizontalRuler = ({ isDark }) => {
  return <hr className={isDark ? dark : light} />;
};

HorizontalRuler.propTypes = {
  isDark: PropTypes.bool
};

HorizontalRuler.defaultProps = {
  isDark: false
};

export default HorizontalRuler;
