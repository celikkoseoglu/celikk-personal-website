import React from "react";
import PropTypes from "prop-types";

const ImageExperience = ({ imageLink, imageAlt, title, subtitle, text }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img className="col-md-12" src={imageLink} alt={imageAlt} />
      </div>
      <div className="col-md-8">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

ImageExperience.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string
};

ImageExperience.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  text: null
};

export default ImageExperience;
