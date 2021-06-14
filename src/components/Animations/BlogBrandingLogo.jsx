import React from "react";
import PropTypes from "prop-types";
import {
  lightStroke,
  darkStroke,
  lightFill,
  darkFill,
  colorTransition,
} from "../../stylesheets/components/Animations/BlogBrandingLogo.module.sass";

const DRAW_IN_TIME = 0.5;
const FADE_IN_TIME = 0.06;
const DRAW_OUT_TIME = 0.4;
const EASE_IN_OUT_BEZIER_SPLINES = "0.42 0 0.58 1";

const BlogBrandingLogo = ({ className, isDark }) => (
  <svg id="branding" className={className} viewBox="0 0 504 715" visibility="hidden" version="1.1">
    <path
      className={`${isDark ? darkFill : lightFill} ${colorTransition}`}
      d="M446.7,696.8c-86,24-172.1,24-258.5,0.7c23.9-11.2,63.2-25.8,
      113.5-28.5C368.7,665.4,420.5,684.8,446.7,696.8z"
      opacity="0"
    >
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur={FADE_IN_TIME}
        begin="enter.end"
        fill="freeze"
      />
    </path>

    <path
      id="linePath"
      fill="transparent"
      className={`${isDark ? darkStroke : lightStroke} ${colorTransition}`}
      strokeWidth="103"
      strokeDasharray="1170"
      d="M472.8,104.3c-21.6-16.1-79.8-51.9-157-51.9c-145.3,0-263.2,117.8-263.2,
      263.2c0,159.2,144.4,259.3,263.2,263.2c74.8,2.5,132.1-33.5,156-51.2"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="1170"
        to="0"
        dur={DRAW_IN_TIME}
        fill="freeze"
        calcMode="spline"
        keySplines={EASE_IN_OUT_BEZIER_SPLINES}
        keyTimes="0;1"
        id="enter"
      />
      <animate
        id="exit"
        begin="branding.click"
        attributeName="stroke-dashoffset"
        from="540"
        to="980"
        dur={DRAW_OUT_TIME}
        fill="freeze"
      />
    </path>
    <set attributeName="visibility" from="hidden" to="visible" />
  </svg>
);

BlogBrandingLogo.propTypes = {
  className: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
};

BlogBrandingLogo.defaultProps = {
  className: null,
};

export default BlogBrandingLogo;
