import React from "react";
import PropTypes from "prop-types";

import {
  sun,
  moon,
  darkModeToggle,
  crescent,
} from "../stylesheets/components/DarkModeToggle.module.sass";

const DarkModeToggle = ({ isDark, onClickMethod }) => {
  return (
    <button
      type="button"
      aria-label="Dark Mode Toggle"
      onClick={(_) => onClickMethod(!isDark)}
      className={`${isDark ? moon : sun} my-auto ${darkModeToggle}`}
    >
      <div className={crescent} />
    </button>
  );
};

DarkModeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onClickMethod: PropTypes.func.isRequired,
};

export default DarkModeToggle;
