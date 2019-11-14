import React from "react";
import PropTypes from "prop-types";
import { mobileSize } from "../stylesheets/components/ImageExperience.module.sass";

const ImageExperience = ({
  rightAlign,
  imageLink,
  imageAlt,
  title,
  subtitle,
  text,
  className
}) => {
  return (
    <div
      className={`mx-auto row ${mobileSize} ${className} ${
        rightAlign ? "flex-column-reverse flex-md-row" : ""
      }`}
    >
      <div
        className={`col-md-4 align-self-center ${rightAlign ? "order-2" : ""}`}
      >
        <img
          className="col-md-12"
          src={`/static/media/${imageLink}`}
          alt={imageAlt}
        />
      </div>
      <div className="col-md-8 align-self-center py-4">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

ImageExperience.propTypes = {
  rightAlign: PropTypes.bool,
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

ImageExperience.defaultProps = {
  rightAlign: false,
  className: null
};

export default ImageExperience;
