import React from "react";
import PropTypes from "prop-types";
import {
  spinner,
  light,
  dark,
} from "../../stylesheets/components/Util/LoadingIndicator.module.sass";

const LoadingIndicator = ({ isDark }) => <div className={`${spinner} ${isDark ? dark : light}`} />;

LoadingIndicator.propTypes = {
  isDark: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
  isDark: null,
};

export default LoadingIndicator;
