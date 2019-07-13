import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Hero = ({
  imageLink,
  imageAlt,
  title,
  subtitle,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-4">
        <img
          className="col-md-12 rounded-circle"
          src={imageLink}
          alt={imageAlt}
        />
      </div>
      <div className="col-md-1" />
      <div className="col-md-5 align-self-center">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <Button href={buttonLink} variant="outline-dark" size="lg">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

Hero.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

Hero.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  buttonText: null,
  buttonLink: null
};

export default Hero;
