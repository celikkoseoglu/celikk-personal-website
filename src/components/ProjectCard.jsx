import React from "react";
import PropTypes from "prop-types";

import {
  titleMargin,
  subtitleMargin
} from "../stylesheets/components/ProjectCard.module.sass";
import SpringDiv from "./SpringDiv";

const ProjectCard = ({ imageLink, imageAlt, title, subtitle, text }) => {
  return (
    <SpringDiv className="col-md-4 text-center">
      <img src={imageLink} className="img-fluid" alt={imageAlt} />
      <h4 className={titleMargin}>{title}</h4>
      <h6 className={subtitleMargin}>{subtitle}</h6>
      <p>{text}</p>
    </SpringDiv>
  );
};

ProjectCard.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string
};

ProjectCard.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  text: null
};

export default ProjectCard;
