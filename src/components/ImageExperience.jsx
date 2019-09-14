import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

const ImageExperience = ({
  imageLink,
  imageAlt,
  title,
  subtitle,
  text,
  className
}) => {
  return (
    <Paper className={`row ${className}`}>
      <div className="col-md-4 align-self-center">
        <img className="col-md-12" src={imageLink} alt={imageAlt} />
      </div>
      <div className="col-md-8 align-self-center">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </div>
    </Paper>
  );
};

ImageExperience.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
};

ImageExperience.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  text: null,
  className: null
};

export default ImageExperience;
