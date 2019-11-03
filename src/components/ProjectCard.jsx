import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  titleMargin,
  subtitleMargin,
  point,
  mobileSize
} from "../stylesheets/components/ProjectCard.module.sass";
import SpringDiv from "./Animations/SpringDiv";

// withRouter is a higher-order component that allows this component to be clickable and it navigates to another page!
// https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

const ProjectCard = withRouter(
  ({ history, imageLink, imageAlt, title, subtitle, text, blogPost }) => {
    return (
      <SpringDiv
        onClick={() => {
          history.push(`/blog/${blogPost}`);
        }}
        className={`col-md-4 text-center ${point} ${mobileSize}`}
      >
        <img src={imageLink} className="img-fluid" alt={imageAlt} />
        <h4 className={titleMargin}>{title}</h4>
        <h6 className={subtitleMargin}>{subtitle}</h6>
        <p>{text}</p>
      </SpringDiv>
    );
  }
);

ProjectCard.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  blogPost: PropTypes.string
};

ProjectCard.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  text: null,
  blogPost: null
};

export default ProjectCard;
