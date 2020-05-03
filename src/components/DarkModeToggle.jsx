import React from "react";
import PropTypes from "prop-types";
import storage from "local-storage-fallback";
import {
  sun,
  moon,
  darkModeToggle,
  crescent,
} from "../stylesheets/components/DarkModeToggle.module.sass";

const onClickWrapper = (onClickMethod, isDark) => {
  onClickMethod(isDark);
  storage.setItem("theme", isDark.toString());
};

const DarkModeToggle = ({ isDark, onClickMethod }) => {
  return (
    <button
      type="button"
      aria-label="Dark Mode Toggle"
      onClick={(_) => onClickWrapper(onClickMethod, !isDark)}
      className={`${isDark ? moon : sun} ${darkModeToggle}`}
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
