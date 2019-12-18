import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  titleMargin,
  subtitleMargin,
  point,
  mobileSize
} from "../stylesheets/components/ProjectCard.module.sass";
import SpringDiv from "./Animations/SpringDiv";
import UnstyledLink from "./Util/UnstyledLink";
import { getImageLinkWithExtension } from "../utils/FileManager.utils";

const ProjectCard = ({ imageLink, imageAlt, title, subtitle, text, blogPost }) => {
  const [relativeImageLink, setRelativeImageLink] = useState(null);
  useEffect(() => {
    const imageLinkWithExtension = getImageLinkWithExtension(imageLink);
    import(`../${imageLinkWithExtension}`).then(loadedLink => {
      setRelativeImageLink(loadedLink.default);
    });
  }, [relativeImageLink, imageLink]);

  return (
    <SpringDiv className={`col-md-4 text-center ${point} ${mobileSize}`}>
      <UnstyledLink to={`/blog/${blogPost}`}>
        {relativeImageLink ? <img src={relativeImageLink} className="img-fluid" alt={imageAlt} /> : null}
        <h4 className={titleMargin}>{title}</h4>
        <h6 className={subtitleMargin}>{subtitle}</h6>
        <p>{text}</p>
      </UnstyledLink>
    </SpringDiv>
  );
};

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
