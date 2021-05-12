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
  // when mobile device is zoomed in using the pinch gesture, we need to get the relative
  // coordinate on the page.
  // https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-
  // an-html-element-relative-to-the-browser-window
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = event.target.getBoundingClientRect();
  const offsetTop = elemRect.top - bodyRect.top;
  const offsetLeft = elemRect.left - bodyRect.left;

  // this tells us how much the user has zoomed in using the pinch gesture
  const deviceZoomRatio = document.documentElement.clientWidth / window.innerWidth;

  const customEventState = {
    x: offsetLeft + elemRect.width / 2,
    // if the user is pinch zoomed in, then use the pinch zoom coordinate detection logic,
    // otherwise, use the distance of the icon from the top of the page. For some reason
    // offsetTop doesn't work when the user scrolls down and the zoom ratio == 1 (iOS14)
    y: (deviceZoomRatio > 1 ? offsetTop : elemRect.top) + elemRect.height / 2,
  };

  const darkModeToggleEvent = new CustomEvent("darkModeToggle", { detail: customEventState });
  onClickMethod(isDark);
  storage.setItem("theme", isDark.toString());
  dispatchEvent(darkModeToggleEvent);
};

const DarkModeToggle = ({ isDark, onClickMethod }) => (
  <button
    type="button"
    aria-label="Dark Mode Toggle"
    onClick={(event) => onClickWrapper(onClickMethod, !isDark, event)}
    className={`${isDark ? moon : sun} ${darkModeToggle}`}
  >
    <div className={crescent} />
  </button>
);

DarkModeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onClickMethod: PropTypes.func.isRequired,
};

export default DarkModeToggle;
