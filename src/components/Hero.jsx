import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Wall from "../data/images/wall.jpg";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const Hero = ({
  imageLink,
  imageAlt,
  title,
  subtitle,
  button1Text,
  button1Link,
  button2Text,
  button2Link
}) => {
  const classes = useStyles();

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
        <div className="" />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          href={button1Link}
        >
          {button1Text}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          href={button2Link}
        >
          {button2Text}
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
  button1Text: PropTypes.string,
  button1Link: PropTypes.string,
  button2Text: PropTypes.string,
  button2Link: PropTypes.string
};

Hero.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  button1Text: null,
  button1Link: null,
  button2Text: null,
  button2Link: null
};

export default Hero;
