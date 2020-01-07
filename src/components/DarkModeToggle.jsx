import React from "react";
import PropTypes from "prop-types";

import { sun, moon, darkModeToggle } from "../stylesheets/components/DarkModeToggle.module.sass";

const DarkModeToggle = ({ isDark }) => {
  return <p className={`${isDark ? moon : sun} my-auto ${darkModeToggle}`}/>;
};

DarkModeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired
};

export default DarkModeToggle;
