import React from "react";
import Lottie from "react-lottie";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import animationData from "../../data/animations/arrowAnimation";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const ArrowAnimation = ({ className, reference }) => {
  return (
    <div className={className}>
      <Link
        to={reference}
        smooth
        offset={-90}
        duration={500}
        ignoreCancelEvents={false}
        href="/"
      >
        <Lottie options={defaultOptions} height={150} width={150} />
      </Link>
    </div>
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
