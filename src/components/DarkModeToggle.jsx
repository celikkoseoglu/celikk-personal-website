import React from "react";
import PropTypes from "prop-types";

import { sun, moon, darkModeToggle } from "../stylesheets/components/DarkModeToggle.module.sass";

const DarkModeToggle = ({ isDark, onClickMethod }) => {
  return (
    <button
      type="button"
      onClick={_ => onClickMethod(!isDark)}
      className={`${isDark ? moon : sun} my-auto ${darkModeToggle}`}
    >
      Dark Mode Toggle
    </button>
  );
};

DarkModeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onClickMethod: PropTypes.func.isRequired
};

export default DarkModeToggle;
