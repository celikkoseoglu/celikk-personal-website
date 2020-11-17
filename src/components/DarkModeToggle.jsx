import React from "react";
import PropTypes from "prop-types";
import storage from "local-storage-fallback";
import {
  sun,
  moon,
  darkModeToggle,
  crescent,
} from "../stylesheets/components/DarkModeToggle.module.sass";

const onClickWrapper = (onClickMethod, isDark, event) => {
  const customEventState = {
    isDark,
    pageX: event.pageX,
    pageY: event.pageY,
  };

  const darkModeToggledEvent = new CustomEvent("darkModeToggled", { detail: customEventState });
  onClickMethod(isDark);
  storage.setItem("theme", isDark.toString());
  dispatchEvent(darkModeToggledEvent);
};

const DarkModeToggle = ({ isDark, onClickMethod }) => {
  return (
    <button
      type="button"
      aria-label="Dark Mode Toggle"
      onClick={(event) => onClickWrapper(onClickMethod, !isDark, event)}
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
