import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const ArrowAnimation = ({ className, reference }) => {
  return (
    <Link to={reference} smooth offset={-90} duration={500} ignoreCancelEvents={false} href="/">
      <svg className={className} viewBox="12 0 62 130" visibility="hidden" version="1.1">
        <polygon points="0,8 0,-8 16,0" fill="#fff">
          <animateMotion dur="2s" rotate="auto" fill="freeze">
            <mpath xlinkHref="#linePath" />
          </animateMotion>
        </polygon>
        <path
          id="linePath"
          fill="transparent"
          stroke="#fff"
          strokeWidth="3.5"
          strokeDasharray="780"
          d="M24.1,18.6c3.2-8.1,9.6-13,15.8-12.6c6.2,0.4,12.4,6.3,12.9,12.4c1.5,15.3-33.1,20.9-36.3,44.4
	c-0.8,6.2,0.4,14.1,5.2,20.4c1,1.3,6.7,8.8,17.2,10.4c10.7,1.6,20.6-3.8,26-11.3c1.5-2.1,7.1-9.8,4.6-18.9
	c-1.6-5.6-6.5-12.6-13.7-13c-5.7-0.4-9.8,3.5-10.3,3.9c-4.9,4.9-4.8,12-4.7,20.2c0.1,7.7,0.2,18.9,0.3,35"
        >
          <animate attributeName="stroke-dashoffset" from="780" to="0" dur="5.5s" fill="freeze" />
        </path>
        <set attributeName="visibility" from="hidden" to="visible" />
      </svg>
    </Link>
  );
};

ArrowAnimation.propTypes = {
  className: PropTypes.string,
  reference: PropTypes.string
};

ArrowAnimation.defaultProps = {
  className: null,
  reference: null
};

export default ArrowAnimation;
