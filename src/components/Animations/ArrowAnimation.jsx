import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const DRAW_IN_TIME = 1.5;
const DRAW_OUT_TIME = 0.4;
const EASE_IN_OUT_BEZIER_SPLINES = "0.42 0 0.58 1";
const SCROLL_DURATION = 500;
const SCROLL_OFFSET = -90;

const ArrowAnimation = ({ className, reference }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) {
      document.getElementById("exit").onend = () => {
        setClicked(true);
      };
    }
  });

  return (
    clicked === false && (
      <Link
        aria-label="Scroll Down Prompt"
        to={reference}
        smooth
        offset={SCROLL_OFFSET}
        duration={SCROLL_DURATION}
        ignoreCancelEvents={false}
        href="/"
      >
        <svg
          id="trigger"
          className={className}
          viewBox="12 0 62 130"
          visibility="hidden"
          version="1.1"
        >
          <polygon points="0,8 0,-8 16,0" fill="#fff">
            <animateMotion
              dur={DRAW_IN_TIME}
              rotate="auto"
              fill="freeze"
              calcMode="spline"
              keySplines={EASE_IN_OUT_BEZIER_SPLINES}
              keyPoints="0;1"
              // required for Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1105912
              keyTimes="0;1"
            >
              <mpath xlinkHref="#linePath" />
            </animateMotion>
            <set begin="exit.end" attributeName="visibility" from="visible" to="hidden" />
          </polygon>
          <path
            id="linePath"
            fill="transparent"
            stroke="#fff"
            strokeWidth="3.5"
            strokeDasharray="280"
            d="M24.1,18.6c3.2-8.1,9.6-13,15.8-12.6c6.2,0.4,12.4,6.3,12.9,12.4c1.5,15.3-33.1,
            20.9-36.3,44.4c-0.8,6.2,0.4,14.1,5.2,20.4c1,1.3,6.7,8.8,17.2,10.4c10.7,1.6,20.6-3.8,
            26-11.3c1.5-2.1,7.1-9.8,4.6-18.9c-1.6-5.6-6.5-12.6-13.7-13c-5.7-0.4-9.8,3.5-10.3,
            3.9c-4.9,4.9-4.8,12-4.7,20.2c0.1,7.7,0.2,18.9,0.3,35"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="280"
              to="0"
              dur={DRAW_IN_TIME}
              fill="freeze"
              calcMode="spline"
              keySplines={EASE_IN_OUT_BEZIER_SPLINES}
              keyTimes="0;1"
            />
            <animate
              id="exit"
              begin="trigger.click"
              attributeName="stroke-dashoffset"
              from="540"
              to="280"
              dur={DRAW_OUT_TIME}
              fill="freeze"
            />
          </path>
          <set attributeName="visibility" from="hidden" to="visible" />
        </svg>
      </Link>
    )
  );
};

ArrowAnimation.propTypes = {
  className: PropTypes.string,
  reference: PropTypes.string,
};

ArrowAnimation.defaultProps = {
  className: null,
  reference: null,
};

export default ArrowAnimation;
